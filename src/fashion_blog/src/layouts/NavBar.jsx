import React from 'react'
import NavLink from '../components/NavLink'

const NavBar = () => {
  return (
    <nav>
        <div className="w3-bar w3-black w3-hide-small">
            <NavLink href="#" className="w3-bar-item w3-button" icon="fa-facebook-official" />
            <NavLink href="#" className="w3-bar-item w3-button" icon="fa-instagram" />
            <NavLink href="#" className="w3-bar-item w3-button" icon="fa-snapchat" />
            <NavLink href="#" className="w3-bar-item w3-button" icon="fa-flickr" />            
            <NavLink href="#" className="w3-bar-item w3-button" icon="fa-twitter" />
            <NavLink href="#" className="w3-bar-item w3-button" icon="fa-linkedin" />
            <NavLink href="#" className="w3-bar-item w3-button w3-right" icon="fa-search" />
        </div>
    </nav>
  )
}

export default NavBar