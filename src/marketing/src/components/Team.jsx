import React from 'react'

const Team = ({
  src,
  alt,
  name,
  title,
  message
}) => {
  return (
      <div className="w3-third w3-margin-bottom">
        <div className="w3-card-4">
          <img src={src} alt={alt} style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>{name}</h3>
            <p className="w3-opacity">{title}</p>
            <p>
              {message}
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Team