import React from 'react'

const HotelCard = ({
    src,
    alt,
    city
}) => {
  return (
    <div className="w3-half w3-margin-bottom">
        <div className="w3-display-container">
            <img
            src={src}
            alt={alt}
            style={{ width: "100%" }}
            />
            <span className="w3-display-bottomleft w3-padding">{city}</span>
        </div>
    </div>
  )
}

export default HotelCard