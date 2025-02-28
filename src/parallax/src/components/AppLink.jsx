import React from 'react'

const AppLink = ({
  onClick,
  href,
  title
}) => {
  return (
    <a href={href} className="w3-bar-item w3-button" onClick={onClick}>{title}</a>
    
  )
}

export default AppLink