import React from 'react'
import {
  getImageSize,
  getRelativePosition,
  normalize,
  minsize,
} from '../utils.js'
import CropBox from './CropBox.js'
import CropPreview from './CropPreview.js'
import placeholder from './placeholder.svg'

const Loader = ({ error }) => (
  <img style={{ background: error ? 'red' : 'black' }} src={placeholder} />
)

const noop = () => null

class CropBoxWrapper extends React.Component {
  static defaultProps = {
    Loader,
    cropBox: {
      left: 0.1,
      right: 0.9,
      top: 0.1,
      bottom: 0.9,
      x: 0.5,
      y: 0.5,
    },
    src: placeholder,
    previews: [],
    onChange: noop,
    onChanging: noop,
  }

  constructor(props) {
    super(props)
    this.state = {
      dragging: null,
      size: props.size,
      cropBox: normalize(props.cropBox),
    }

    this.elementRef = el => (this.element = el)
    this.imageRef = img => (this.getRelativePosition = getRelativePosition(img))

    this.onChange = () => this.props.onChange(this.state.cropBox)
    this.onChanging = () => this.props.onChanging(this.state.cropBox)

    this.startDragHandleFactory = this.startDragHandleFactory.bind(this)

    this.eventHandlers = {
      startNewCrop: this.startNewCrop.bind(this),
      startMoveCross: this.startMoveCross.bind(this),
      startMoveCropBox: this.startMoveCropBox.bind(this),
      moveDragHandle: this.moveDragHandle.bind(this),
      endDragHandle: this.endDragHandle.bind(this),
      clickInner: this.clickInner.bind(this),
    }
  }
  componentDidMount() {
    this.setImageSize()
  }

  setImageSize = () => {
    this.setState({ size: null })
    getImageSize(this.props.src)
      .then(size => this.setState({ size }))
      .catch(err => this.setState({ error: true }))
  }

  startNewCrop(e) {
    this.element.setPointerCapture(e.pointerId)
    // e.preventDefault()
    const [mx, my] = this.getRelativePosition(e)
    const { cropBox } = this.state
    this.setState({
      cropBox: {
        ...cropBox,
        left: mx,
        top: my,
        right: mx,
        bottom: my,
      },
      dragging: {
        cursor: 'move',
        dragMask: [1, 1, 0, 0, 0],
        initialPosition: [mx, my],
        initialCrop: cropBox,
      },
    })
  }

  moveDragHandle(e) {
    const { cropBox, dragging } = this.state
    if (!dragging) return
    const [mx, my] = this.getRelativePosition(e)
    const { dragMask, initialPosition: [ix, iy], initialCrop: ic } = dragging
    let { x, y, left, top, right, bottom } = cropBox
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
    this.setState({
      dragging: { ...this.state.dragging, dragMask: [dl, dt, dr, db, dc] },
      cropBox: normalize({ x, y, left, top, right, bottom }),
      click: false,
    })
    this.onChanging()
  }

  startDragHandleFactory(dragMask, cursor = 'move') {
    return e => {
      this.element.setPointerCapture(e.pointerId)
      const update = {
        dragging: {
          cursor,
          dragMask,
          initialCrop: this.state.cropBox,
          initialPosition: this.getRelativePosition(e),
        },
      }
      // use setTimeout here to avoid losing pointer capture when handle
      // disappears from the dom
      setTimeout(() => this.setState(update), 0)
    }
  }

  startMoveCropBox(e) {
    this.setState({ click: true })
    this.startDragHandleFactory([1, 1, 1, 1, 0])(e)
  }

  startMoveCross(e) {
    this.startDragHandleFactory([0, 0, 0, 0, 1])(e)
  }

  endDragHandle(e) {
    this.getRelativePosition(e)
    const { click, cropBox, dragging } = this.state
    if (click || !dragging) return
    this.setState({
      cropBox: minsize(0.1)(cropBox),
      dragging: null,
    })
    this.onChange()
  }

  clickInner(e) {
    const { cropBox, click } = this.state
    if (!click) return
    const [x, y] = this.getRelativePosition(e)
    this.setState({
      dragging: false,
      click: false,
      cropBox: normalize({ ...cropBox, x, y }),
    })
    this.onChange()
  }

  render() {
    const { src, previews, Loader } = this.props
    const { error, size, dragging, cropBox } = this.state
    const props = {
      src,
      size,
      dragging,
      cropBox,
      imageRef: this.imageRef,
      elementRef: this.elementRef,
      startDragHandleFactory: this.startDragHandleFactory,
      ...this.eventHandlers,
    }

    if (!size)
      return <div className="CropBoxContainer">{error && <Loader error />}</div>

    return (
      <div className="CropBoxContainer">
        {previews.length > 0 && (
          <CropPreview
            aspects={previews}
            size={size}
            src={src}
            cropBox={cropBox}
          />
        )}
        <CropBox {...props} />
      </div>
    )
  }
}

export default CropBoxWrapper
