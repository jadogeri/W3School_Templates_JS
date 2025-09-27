import React from 'react'

const PhotoCard = ({
    src,
    title,
    alt,
    description
}) => {
  return (
      <div className="w3-third w3-container w3-margin-bottom">
        <img
          src={src}
          alt={alt}
          style={{ width: "100%" }}
          className="w3-hover-opacity"
        />
        <div className="w3-container w3-white">
          <p>
            <b>{title}</b>
          </p>
          <p>
           {description}
          </p>
        </div>
      </div>
  )
}

export default PhotoCard