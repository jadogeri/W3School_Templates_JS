import React from 'react'

export const Slide = ({
    src,
    className,
    title
}) => {
  return (
    <div className="w3-display-container mySlides">
    <img src={src} style={{ width: "100%" }} />
    <div className={className}>
        <span className="w3-white w3-padding-large w3-animate-bottom">
        {title}
        </span>
    </div>
    </div>
  )
}
