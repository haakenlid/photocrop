// clamp number between min and max
const clamp = (min, max) => n => Math.max(min, Math.min(n, max))

// round to precision 4
export const round = num => Number(num.toPrecision(4))

// relative ratio between low and high
const ratioOf = (low, val, high) =>
  high === low ? 0.5 : (val - low) / (high - low)

// format number 0.5 -> '50%'
const numberToPercent = number => `${(100 * number).toFixed(1)}%`

// normalize cropbox. Make sure it's not outside of bounds,
// that top < bottom etc.
export const normalize = ({ x, y, left, top, right, bottom }) => {
  const func = (a, b) => a - b
  const h_sorted = [0, 0, left, right, 1, 1].sort(func)
  const v_sorted = [0, 0, top, bottom, 1, 1].sort(func)
  return {
    x: [0, x, 1].sort(func)[1],
    y: [0, y, 1].sort(func)[1],
    left: h_sorted[2],
    top: v_sorted[2],
    right: h_sorted[3],
    bottom: v_sorted[3],
  }
}

// make sure cropbox has a minimum size
export const minsize = size => ({ left, right, top, bottom, x, y }) => {
  if (right - left < size) {
    const c = (left + right) / 2
    left = c - size / 2
    right = c + size / 2
  }
  if (bottom - top < size) {
    const c = (top + bottom) / 2
    top = c - size / 2
    bottom = c + size / 2
  }
  return normalize({ x, y, left, right, top, bottom })
}

const closeCrop = (x, y, l, r, t, b, A) => {
  const w = r - l
  const h = b - t
  const a = w / h
  const W = 0.5 * Math.min(A, 1, a > A ? w : h * A)
  const H = W / A
  const [X, Y] = [
    W * 2 > w ? [W, (l + r) / 2, 1 - W] : [l + W, x, r - W],
    H * 2 > h ? [H, (t + b) / 2, 1 - H] : [t + H, y, b - H],
  ].map(arr => arr.sort((n, m) => n - m)[1])
  return { left: X - W, right: X + W, top: Y - H, bottom: Y + H }
}

export const getStyles = (src, cropBox, imgRatio, frameRatio) => {
  const { left, top, right, bottom } = closeCrop(
    cropBox.x,
    cropBox.y,
    cropBox.left,
    cropBox.right,
    cropBox.top,
    cropBox.bottom,
    frameRatio / imgRatio,
  )
  const width = right - left
  const height = bottom - top
  return {
    backgroundImage: `url("${src}")`,
    backgroundPosition: [[width, right, 1], [height, bottom, 1]]
      .map(dim => ratioOf(...dim))
      .map(numberToPercent)
      .join(' '),
    backgroundRepeat: 'no-repeat',
    backgroundSize: `${numberToPercent(1 / width)} auto`,
  }
}

// download image and find pixel width and height
export const getImageSize = src =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve([img.width, img.height])
    img.onerror = reject
    img.src = src
  })

export const getRelativePosition = element => e => {
  const { left, top, width, height } = element.getBoundingClientRect()
  return [(e.clientX - left) / width, (e.clientY - top) / height]
    .map(clamp(0, 1))
    .map(round)
}
