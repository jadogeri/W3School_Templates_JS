import React from 'react'

const SideBarItem = ({
    href,
    title,
    className
}) => {
  return (
        <a href={href} className="w3-bar-item w3-button">
      <i className={className} />
      {title}
    </a>
  )
}

export default SideBarItem