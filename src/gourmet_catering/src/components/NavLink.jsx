import React from 'react'

const NavLink = ({
    href,
    title
}) => {
  return (
    <a href={href} className="w3-bar-item w3-button" >
    {title}
  </a>
  )
}

export default NavLink