import React from 'react'
import {
  getImageSize,
  getRelativePosition,
  normalize,
  minsize,
} from '../utils.js'
import CropBox from './CropBox.js'
import CropPreview from './CropPreview.js'
import p from './placeholder.svg'
const placeholder = JSON.parse(p)

const Loader = ({ error }) => (
  <img style={{ background: error ? 'red' : 'black' }} src={placeholder} />
)

class CropBoxWrapper extends React.Component {
  static defaultProps = {
    Loader,
    crop_box: {
      left: 0.1,
      right: 0.9,
      top: 0.1,
      bottom: 0.9,
      x: 0.5,
      y: 0.5,
    },
    src: placeholder,
    previews: [],
  }

  constructor(props) {
    super(props)
    this.state = { dragging: null, crop_box: props.crop_box, click: false }

    this.elementRef = el => (this.element = el)
    this.imageRef = img => (this.getRelativePosition = getRelativePosition(img))

    this.startDragHandleFactory = this.startDragHandleFactory.bind(this)

    this.eventHandlers = {
      startNewCrop: this.startNewCrop.bind(this),
      startMoveCross: this.startMoveCross.bind(this),
      startMoveCropBox: this.startMoveCropBox.bind(this),
      moveDragHandle: this.moveDragHandle.bind(this),
      endDragHandle: this.endDragHandle.bind(this),
    }
  }

  setImageSize = () => {
    this.setState({ size: null })
    getImageSize(this.props.src)
      .then(size => this.setState({ size }))
      .catch(err => this.setState({ error: true }))
  }

  componentDidMount() {
    this.setImageSize()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.src != this.props.src) this.setImageSize()
  }

  startNewCrop(e) {
    this.element.setPointerCapture(e.pointerId)
    // e.preventDefault()
    const [mx, my] = this.getRelativePosition(e)
    const { crop_box } = this.state
    this.setState({
      crop_box: {
        ...crop_box,
        left: mx,
        top: my,
        right: mx,
        bottom: my,
      },
      dragging: {
        cursor: 'move',
        dragMask: [1, 1, 0, 0, 0],
        initialPosition: [mx, my],
        initialCrop: crop_box,
      },
    })
  }

  moveDragHandle(e) {
    const { click, crop_box, dragging } = this.state
    if (!dragging) return
    const [mx, my] = this.getRelativePosition(e)
    const { dragMask, initialPosition: [ix, iy], initialCrop: ic } = dragging
    let { x, y, left, top, right, bottom } = crop_box
    let [dl, dt, dr, db, dc] = dragging.dragMask
    const dx = mx - ix
    const dy = my - iy
    dc && (x = mx)
    dc && (y = my)
    dl && (left = mx)
    dt && (top = my)
    dr && (right = mx)
    db && (bottom = my)
    if (dl && dr && dt && db) {
      left = ic.left + dx
      top = ic.top + dy
      right = ic.right + dx
      bottom = ic.bottom + dy
    }
    top > bottom && ([dt, db] = [db, dt])
    left > right && ([dl, dr] = [dr, dl])
    if (click) {
      if (Math.abs(dx) + Math.abs(dy) > 0.05) this.setState({ click: false })
      else return
    }
    this.setState({
      dragging: { ...this.state.dragging, dragMask: [dl, dt, dr, db, dc] },
      crop_box: normalize({ x, y, left, top, right, bottom }),
    })
  }

  startDragHandleFactory(dragMask, cursor = 'move') {
    return e => {
      this.element.setPointerCapture(e.pointerId)
      const update = {
        dragging: {
          cursor,
          dragMask,
          initialCrop: this.state.crop_box,
          initialPosition: this.getRelativePosition(e),
        },
      }
      // use setTimeout here to avoid losing pointer capture when handle
      // disappears from the dom
      setTimeout(() => this.setState(update), 0)
    }
  }

  startMoveCropBox(e) {
    this.startDragHandleFactory([1, 1, 1, 1, 0])(e)
    this.setState({ click: true })
    // use 200 ms delay to simulate click with pointer events
    // TODO: use onclick instead ?
    setTimeout(() => this.setState({ click: false }), 200)
  }

  startMoveCross(e) {
    this.startDragHandleFactory([0, 0, 0, 0, 1])(e)
  }

  endDragHandle(e) {
    const { click, crop_box, dragging } = this.state
    if (!dragging) return
    let new_crop_box
    if (click) {
      const { initialCrop, initialPosition: [x, y] } = dragging
      new_crop_box = { ...initialCrop, x, y }
    } else {
      new_crop_box = minsize(0.1)(crop_box)
    }
    this.setState({ crop_box: new_crop_box, dragging: null, click: false })
  }

  render() {
    const { src, previews, Loader } = this.props
    const { error, size, dragging, crop_box } = this.state
    const props = {
      src,
      size,
      dragging,
      crop_box,
      imageRef: this.imageRef,
      elementRef: this.elementRef,
      startDragHandleFactory: this.startDragHandleFactory,
      ...this.eventHandlers,
    }

    if (!size) {
      return (
        <div className="CropBoxContainer">
          {error ? <Loader error /> : <Loader />}
        </div>
      )
    }

    return (
      <div className="CropBoxContainer">
        {previews.length > 0 && (
          <CropPreview
            aspects={previews}
            size={size}
            src={src}
            crop_box={crop_box}
          />
        )}
        <CropBox {...props} />
      </div>
    )
  }
}

export default CropBoxWrapper
