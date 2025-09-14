import React from 'react'

const RoomCard = ({
    src,
    alt,
    header,
    price,
    bed,
    size,
    features

}) => {
  return (
          <div className="w3-third w3-margin-bottom">
        <img
          src={src}
          alt={alt}
          style={{ width: "100%" }}
        />
        <div className="w3-container w3-white">
          <h3>{header}</h3>
          <h6 className="w3-opacity">From {price}</h6>
          <p>{bed}</p>
          <p>
            {size}<sup>2</sup>
          </p>
          <p className="w3-large">
            {features}
          </p>
          <button className="w3-button w3-block w3-black w3-margin-bottom">
            Choose Room
          </button>
        </div>
      </div>
  )
}

export default RoomCard