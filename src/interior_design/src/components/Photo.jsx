import React from 'react'

const Photo = ({
  src,
  alt,
  onClick
}) => {
  return (
    <img
      src={src}
      style={{ width: "100%" }}
      onClick={onClick}
      alt={alt}
    />
  )
}

export default Photo