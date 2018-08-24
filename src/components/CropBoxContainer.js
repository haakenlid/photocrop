import React from 'react'
import {
  getImageSize,
  getRelativePosition,
  normalize,
  minsize,
} from '../utils.js'
import { getCursor } from './cursors.js'
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
    value: {
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
      cropBox: normalize(props.value),
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
    }
  }
  componentDidMount() {
    this.setImageSize()
  }
  componentDidUpdate(prevProps) {
    if (!this.state.dragging && prevProps.value != this.props.value)
      this.setState({ cropBox: normalize(this.props.value) })
  }

  setImageSize = () => {
    this.setState({ size: null })
    getImageSize(this.props.src)
      .then(size => this.setState({ size }))
      .catch(err => this.setState({ error: true }))
  }

  moveDragHandle(e) {
    e.preventDefault()
    e.stopPropagation()
    const { cropBox, dragging, click } = this.state
    if (!dragging || e.pointerId != dragging.pointerId) return
    const [mx, my] = this.getRelativePosition(e)
    const { initialPosition: [ix, iy], initialCrop: ic } = dragging
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
    if (click == e.pointerId) {
      if (Math.abs(dx) + Math.abs(dy) > 0.03) this.setState({ click: null })
      else return
    }
    const dragMask = [dl, dt, dr, db, dc]
    const cursor = getCursor(dragMask) || dragging.cursor
    const stateUpdate = {
      dragging: {
        ...dragging,
        cursor,
        dragMask,
      },
      cropBox: normalize({ x, y, left, top, right, bottom }),
    }
    this.setState(stateUpdate, this.onChanging)
  }

  startDragHandleFactory(dragMask, cursor = 'move') {
    return e => {
      const pointerId = e.pointerId
      const initialPosition = this.getRelativePosition(e)
      e.preventDefault()
      e.stopPropagation()
      this.element.setPointerCapture(pointerId)

      // use setTimeout here to avoid losing pointer capture when handle
      // disappears from the dom
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() =>
        this.setState(state => ({
          ...state,
          dragging: {
            dragMask,
            cursor,
            pointerId,
            initialPosition,
            initialCrop: state.cropBox,
          },
        })),
      )
    }
  }

  endDragHandle(e) {
    // if (!this.state.dragging) return
    clearTimeout(this.timeout)
    if (this.state.click == e.pointerId) {
      const [x, y] = this.getRelativePosition(e)
      this.setState(({ cropBox, ...state }) => ({
        ...state,
        cropBox: { ...cropBox, x, y },
        click: null,
      }))
    }
    this.setState(
      ({ cropBox, ...state }) => ({
        ...state,
        cropBox: minsize(0.1)(cropBox),
        dragging: null,
      }),
      this.onChange,
    )
  }

  startMoveCropBox(e) {
    //if (this.state.dragging) return
    const pointerId = e.pointerId
    this.setState({ click: pointerId })
    const cancelClick = () =>
      this.state.click == pointerId && this.setState({ click: null })

    setTimeout(cancelClick, 300)
    this.startDragHandleFactory([1, 1, 1, 1, 0])(e)
  }

  startMoveCross(e) {
    const [x, y] = this.getRelativePosition(e)
    this.setState(
      state => ({
        ...state,
        cropBox: { ...state.cropBox, x, y },
      }),
      this.onChanging,
    )
    this.startDragHandleFactory([0, 0, 0, 0, 1], 'crosshair')(e)
  }

  startNewCrop(e) {
    const [mx, my] = this.getRelativePosition(e)
    const point = { left: mx, right: mx, top: my, bottom: my }
    this.setState({ cropBox: { ...this.state.cropBox, ...point } })
    this.startDragHandleFactory([1, 1, 0, 0], 'move')(e)
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
