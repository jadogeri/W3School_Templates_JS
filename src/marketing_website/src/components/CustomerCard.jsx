import React from 'react'

const CustomerCard = ({
    src,
    alt,
    name
}) => {
  return (
    <div className="w3-quarter">
      <div className="w3-card w3-white">
        <img src={src} alt={alt} style={{ width: "100%" }} />
        <div className="w3-container">
          <h3>{name}</h3>
          <h4>Trade</h4>
          <p>Blablabla</p>
          <p>Blablabla</p>
          <p>Blablabla</p>
          <p>Blablabla</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard