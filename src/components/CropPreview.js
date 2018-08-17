import React from 'react'
import { getStyles } from '../utils.js'

let PreviewImg = ({ src, cropBox, size, aspect, style = {} }) => {
  const styles = getStyles(src, cropBox, size[0] / size[1], aspect)
  const items = {
    position: styles.backgroundPosition,
    size: styles.backgroundSize,
    'aspect ratio': aspect,
  }
  return (
    <div className="PreviewImg" style={style}>
      <svg style={styles} viewBox={`0 0 ${aspect * 2} 2`} />
    </div>
  )
}

const CropPreview = ({ aspects = [2], flexDirection = 'row', ...image }) => {
  const smallest = Math.min(...aspects)
  return (
    <div className="CropPreview" key={aspects} style={{ flexDirection }}>
      {aspects.map((aspect, i) => (
        <PreviewImg
          key={i}
          aspect={aspect}
          style={{ flexGrow: aspect / smallest }}
          {...image}
        />
      ))}
    </div>
  )
}

export default CropPreview
