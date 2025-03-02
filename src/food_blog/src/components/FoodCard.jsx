import React from 'react'

const FoodCard = ({
  src,
  alt,
  review,
  description
}) => {
  return (
    <div className="w3-quarter">
    <img
      src={src}
      alt={alt}
      style={{ width: "100%" }}
    />
    <h3>{review}</h3>
    <p>
      {description}
    </p>
  </div>
  )
}

export default FoodCard