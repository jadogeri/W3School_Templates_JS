import React from 'react'

const NavBarItem = ({
  href,
  name
}) => {
  return (
    <a
    href={href}
    className="w3-bar-item w3-button"
    style={{ width: "25% !important" }}
  >
   {name}
  </a>
  )
}

export default NavBarItem