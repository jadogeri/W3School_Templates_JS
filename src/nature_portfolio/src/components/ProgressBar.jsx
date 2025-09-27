import React from 'react'

const ProgressBar = ({
    name,
    percentage,

}) => {
  return (
    <>
     <p>{name}</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: `${percentage}` }}
        >
          {percentage}
        </div>
      </div>
    </>
  )
}

export default ProgressBar