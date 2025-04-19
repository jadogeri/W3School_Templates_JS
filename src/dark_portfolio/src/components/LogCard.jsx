import React from 'react'

const LogCard = ({
    name,
    level
}) => {
  return (
    <div className="w3-quarter w3-section">
    <span className="w3-xlarge">{level}</span>
    <br />
    {name}
  </div>
  )
}

export default LogCard