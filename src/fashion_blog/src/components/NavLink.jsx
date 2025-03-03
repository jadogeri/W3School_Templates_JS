import React from 'react'

const NavLink = ({
    href,
    className,
    icon
}) => {
  return (
    <a href={href} className={className}>
        <i className={`fa ${icon}`} />
    </a>
  )
}

export default NavLink