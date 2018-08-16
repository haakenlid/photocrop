import React from 'react'
import Overlay from './Overlay'

const CropBox = ({
  src,
  imageRef,
  elementRef,
  error,
  size,
  dragging,
  cropBox,
  moveDragHandle,
  endDragHandle,
  startNewCrop,
  startMoveCross,
  startMoveCropBox,
  clickInner,
  startDragHandleFactory,
}) => (
  <div
    ref={elementRef}
    onPointerMove={moveDragHandle}
    onPointerUp={endDragHandle}
    onLostPointerCapture={endDragHandle}
    className="CropBox"
  >
    <svg
      height="100%"
      preserveAspectRatio="xMidYMin"
      viewBox={`0 0 ${size[0]} ${size[1]}`}
    >
      <image
        className="masterImg"
        xlinkHref={src}
        ref={imageRef}
        width="100%"
        height="100%"
      />
      <Overlay
        cropBox={cropBox}
        size={size}
        dragging={dragging}
        startNewCrop={startNewCrop}
        startMoveCross={startMoveCross}
        startMoveCropBox={startMoveCropBox}
        startDragHandleFactory={startDragHandleFactory}
        clickInner={clickInner}
      />
    </svg>
  </div>
)

export default CropBox
