import React from 'react'

const TeamMember = ({
    src,
    name,
    title,
    alt
}) => {
  return (
    <div className="w3-quarter">
        <img
          src={src}
          alt={alt}
          style={{ width: "45%" }}
          className="w3-circle w3-hover-opacity"
        />
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
  )
}

export default TeamMember