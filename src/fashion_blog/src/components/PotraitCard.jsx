import React from 'react'

const PotraitCard = ({
    src,
    alt,
    className
}) => {
  return (
    <p>
    <img
      src={src}
      alt={alt}
      style={{ width: "100%" }}
      className={className}
    />
  </p>
  )
}

export default PotraitCard