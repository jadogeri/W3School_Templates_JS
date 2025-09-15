import React from 'react'

const HouseCard = ({
    src,
    features
}) => {
  return (
    <div className="w3-half w3-container">
      <img src={src} style={{ width: "100%" }} />
     {features}
    </div>
  )
}

export default HouseCard