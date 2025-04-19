import React from 'react'

const SideBarItem = ({
    href,
    name,
    icon,
    color
}) => {
  return (
    <a href={href} className={`w3-bar-item w3-button w3-padding-large ${color}`}>
      <i className={`fa ${icon} w3-xxlarge`} />
      <p>{name}</p>
    </a>
  )
}

export default SideBarItem