import React from 'react'
import {
  getImageSize,
  getRelativePosition,
  normalize,
  minsize,
  round,
} from '../utils.js'
import Overlay from './Overlay'
import placeholder from './placeholder.svg'

class CropBox extends React.Component {
  static defaultProps = {
    loader: () => <img src={placeholder} />,
    crop_box: {
      left: 0.1,
      right: 0.9,
      top: 0.1,
      bottom: 0.9,
      x: 0.5,
      y: 0.5,
    },
    src: placeholder,
  }

  constructor(props) {
    super(props)
    this.state = { dragging: null, crop_box: props.crop_box }
    this.startNewCrop = this.startNewCrop.bind(this)
    this.moveDragHandle = this.moveDragHandle.bind(this)
    this.endDragHandle = this.endDragHandle.bind(this)
    this.startDragHandleFactory = this.startDragHandleFactory.bind(this)
  }

  setImageSize = () => {
    this.setState({ size: null })
    getImageSize(this.props.src).then(size => this.setState({ size }))
  }

  componentDidMount() {
    this.setImageSize()
    this.element.addEventListener('touchstart', e => e.preventDefault())
  }
  componentDidUpdate(prevProps) {
    if (prevProps.src != this.props.src) this.setImageSize()
  }
  startNewCrop(e) {
    this.element.setPointerCapture(e.pointerId)
    e.preventDefault()
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
        dragMask: [1, 1, 0, 0, 0],
        initialPosition: [mx, my],
        initialCrop: crop_box,
      },
    })
  }
  moveDragHandle(e) {
    const { crop_box, dragging } = this.state
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
      left = round(ic.left + dx)
      top = round(ic.top + dy)
      right = round(ic.right + dx)
      bottom = round(ic.bottom + dy)
    }
    top > bottom && ([dt, db] = [db, dt])
    left > right && ([dl, dr] = [dr, dl])
    this.setState({
      dragging: { ...this.state.dragging, dragMask: [dl, dt, dr, db, dc] },
      crop_box: normalize({ x, y, left, top, right, bottom }),
    })
  }

  startDragHandleFactory(dragMask) {
    return e => {
      e.preventDefault()
      this.element.setPointerCapture(e.pointerId)
      this.setState({
        dragging: {
          dragMask,
          initialCrop: this.state.crop_box,
          initialPosition: this.getRelativePosition(e),
        },
      })
    }
  }

  endDragHandle(e) {
    const crop_box = minsize(0.1)(this.state.crop_box)
    this.setState({ crop_box, dragging: null })
  }

  render() {
    const { src, loader: Loader } = this.props
    const { size, dragging, crop_box } = this.state

    return (
      <div
        ref={el => el && (this.element = el)}
        onPointerMove={this.moveDragHandle}
        onPointerUp={this.endDragHandle}
        onLostPointerCapture={this.endDragHandle}
        className="CropBox"
      >
        {size ? (
          <svg
            height="100%"
            preserveAspectRatio="xMidYMin"
            viewBox={`0 0 ${size[0]} ${size[1]}`}
          >
            <image
              className="masterImg"
              xlinkHref={src}
              ref={img => (this.getRelativePosition = getRelativePosition(img))}
              width="100%"
              height="100%"
            />
            <Overlay
              crop_box={crop_box}
              size={size}
              startNewCrop={this.startNewCrop}
              startDragHandleFactory={this.startDragHandleFactory}
            />
          </svg>
        ) : (
          <Loader />
        )}
      </div>
    )
  }
}

export default CropBox
