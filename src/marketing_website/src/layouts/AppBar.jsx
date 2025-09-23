import React from 'react'

const AppBar = () => {
  return (
    <nav>
            <div
      id="navDemo"
      className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium"
    >
      <a href="#team" className="w3-bar-item w3-button">
        Team
      </a>
      <a href="#work" className="w3-bar-item w3-button">
        Work
      </a>
      <a href="#pricing" className="w3-bar-item w3-button">
        Price
      </a>
      <a href="#contact" className="w3-bar-item w3-button">
        Contact
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Search
      </a>
    </div>
    </nav>
  )
}

export default AppBar