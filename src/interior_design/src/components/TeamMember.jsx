import React from 'react'

const TeamMember = ({
    src,
    alt,
    name,
    title,
    description
}) => {
  return (
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src={src} alt={alt} style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>{name}</h3>
            <p className="w3-opacity">{title}</p>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
  )
}

export default TeamMember