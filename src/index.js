import React from 'react'
import CropBox from './components/CropBoxContainer'
import './index.scss'
export default props => {
  const { src = null, size = null } = props
  const key = JSON.stringify({ src, size })
  return <CropBox {...props} key={key} />
}
