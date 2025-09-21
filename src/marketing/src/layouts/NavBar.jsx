import React from 'react'

const NavBar = () => {
  return (
    <nav>
          <div className="w3-top">
    <div className="w3-row w3-large w3-light-grey">
      <div className="w3-col s3">
        <a href="#" className="w3-button w3-block">
          Home
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#plans" className="w3-button w3-block">
          Plans
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#about" className="w3-button w3-block">
          About
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#contact" className="w3-button w3-block">
          Contact
        </a>
      </div>
    </div>
  </div>
    </nav>
  )
}

export default NavBar