import React from 'react'

const AboutCard = ({
    src,
    name,
    description
   

}) => {
  return (
    <div className="w3-card w3-margin w3-margin-top">
    <img src={src} style={{ width: "100%" }} />
    <div className="w3-container w3-white">
      <h4>
        <b>{name}</b>
      </h4>
      <p>
        {description}
      </p>
    </div>
  </div>
  )
}

export default AboutCard