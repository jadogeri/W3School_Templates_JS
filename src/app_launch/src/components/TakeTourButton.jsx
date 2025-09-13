import React from 'react'

const TakeTourButton = ({
  className,
  onClick
}) => {
  return (
    <a
      className={`w3-button w3-black ${className}`}
      onClick={onClick}
    >
      Take Tour <i className="fa fa-angle-right" />
    </a>
  )
}

export default TakeTourButton