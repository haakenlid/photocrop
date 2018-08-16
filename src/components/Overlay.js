import React from 'react'

const cursors = new Map([
  ['1000', 'ew-resize'],
  ['0010', 'ew-resize'],
  ['0100', 'ns-resize'],
  ['0001', 'ns-resize'],
  ['1100', 'nw-resize'],
  ['0110', 'ne-resize'],
  ['0011', 'se-resize'],
  ['1001', 'sw-resize'],
])

const Handle = ({ name, cursor, startDragHandleFactory }) => {
  const handleSize = 0.2
  const mask = name.split('').map(parseFloat)
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
  clickInner,
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
      >
        <path
          className="outside"
          fillRule="evenodd"
          d={outerPath + boxPath}
          onPointerDown={startNewCrop}
        />
        <g className={`inside${pending ? ' pending' : ''}`}>
          <path
            onClick={clickInner}
            onPointerDown={startMoveCropBox}
            className="box"
            d={boxPath}
          />
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
              {Array.from(cursors).map(([name, cursor]) => (
                <Handle
                  key={name}
                  name={name}
                  cursor={cursor}
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
