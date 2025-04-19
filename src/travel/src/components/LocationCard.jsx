import React from 'react'

const LocationCard = ({
    src,
    alt,
    name
}) => {
  return (
    <div className="w3-half w3-margin-bottom">
    <div className="w3-display-container">
      <img
        src={src}
        alt={alt}
        style={{ width: "100%" }}
      />
      <span className="w3-display-bottomleft w3-padding">{name}</span>
    </div>
  </div>
  )
}

export default LocationCard