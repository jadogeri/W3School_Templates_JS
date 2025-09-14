import React from 'react'

const AboutCard = () => {
  return (
    <div
      className="w3-row-padding w3-large w3-center"
      style={{ margin: "32px 0" }}
    >
      <div className="w3-third">
        <i className="fa fa-map-marker w3-text-red" /> 423 Some adr, Chicago, US
      </div>
      <div className="w3-third">
        <i className="fa fa-phone w3-text-red" /> Phone: +00 151515
      </div>
      <div className="w3-third">
        <i className="fa fa-envelope w3-text-red" /> Email: mail@mail.com
      </div>
    </div>
  )
}

export default AboutCard