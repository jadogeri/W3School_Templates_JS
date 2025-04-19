import React from 'react'
import NavBarItem from "../components/NavBarItem"

const NavBar = () => {
  return (
    <nav>
          <div className="w3-top w3-hide-large w3-hide-medium" id="myNavbar">
    <div className="w3-bar w3-black w3-opacity w3-hover-opacity-off w3-center w3-small">
        <NavBarItem
            href="#" name="HOME"
        />
        <NavBarItem
            href="#about" name="ABOUT"
        />
        <NavBarItem
            href="#photos" name="PHOTOS"
        />
        <NavBarItem
            href="#contact" name="CONTACT"
        />
    </div>
  </div>
    </nav>
  )
}

export default NavBar