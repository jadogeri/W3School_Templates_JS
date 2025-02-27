import React from 'react'

const MenuItem = ({
    title,
    description
}) => {
  return (
    <>
        <h4>{title}</h4>
        <p className="w3-text-grey">
          {description}
        </p>    
    </>
  )
}

export default MenuItem