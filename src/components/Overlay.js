import React from 'react'
import { cursors, getCursor } from './cursors.js'

const Handle = ({
  name,
  cursor,
  mask,
  startDragHandleFactory,
  handleSize = 0.2,
}) => {
  return (
    <rect
      className="Handle"
      onPointerDown={startDragHandleFactory(mask, cursor)}
      width={1 - mask[0] - mask[2] + handleSize}
      height={1 - mask[1] - mask[3] + handleSize}
      x={mask[2] - handleSize / 2}
      y={mask[3] - handleSize / 2}
      style={{ cursor }}
    />
  )
}

const Cross = ({ x, y }) => (
  <path className="cross" d={`M0, ${y}H1M${x}, 0V1`} />
)

const Overlay = ({
  size,
  pending,
  cropBox,
  startDragHandleFactory,
  startMoveCross,
  startMoveCropBox,
  startNewCrop,
  dragging,
}) => {
  const { left, x, right, top, y, bottom } = cropBox
  const boxPath = `M${left}, ${top}V${bottom}H${right}V${top}Z`
  const outerPath = 'M0, 0H1V1H0Z'
  const circleRadius = rx => ({ rx, ry: rx * size[0] / size[1] || rx })
  const style = dragging ? { cursor: dragging.cursor } : {}

  return (
    <svg style={style}>
      <svg
        className="Overlay"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
        height="100%"
        width="100%"
        touch-action="none"
      >
        <path
          className="outside"
          fillRule="evenodd"
          d={outerPath + boxPath}
          onPointerDown={startNewCrop}
        />
        <g className={`inside${pending ? ' pending' : ''}`}>
          <path onPointerDown={startMoveCropBox} className="box" d={boxPath} />
          {dragging ? null : (
            <svg
              className="handles"
              viewBox="0 0 1 1"
              preserveAspectRatio="none"
              height={bottom - top}
              width={right - left}
              x={left}
              y={top}
            >
              {cursors.map(props => (
                <Handle
                  {...props}
                  startDragHandleFactory={startDragHandleFactory}
                />
              ))}
            </svg>
          )}
        </g>
        <g className="centerPoint">
          {dragging ? null : (
            <ellipse
              className="Handle"
              onPointerDown={startMoveCross}
              cx={x}
              cy={y}
              {...circleRadius(0.05)}
            />
          )}
          <Cross x={x} y={y} />
        </g>
      </svg>
    </svg>
  )
}

export default Overlay
