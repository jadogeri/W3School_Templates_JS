import React from 'react'
import { myFunction } from '../utils/myFunction'

const NavBar = () => {
  return (
    <nav>
          <div className="w3-bar w3-red w3-card w3-left-align w3-large">
      <a
        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red"
        onClick={()=>{myFunction()}}
        title="Toggle Navigation Menu"
      >
        <i className="fa fa-bars" />
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large w3-white">
        Home
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        Link 1
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        Link 2
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        Link 3
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        Link 4
      </a>
    </div>

    </nav>
  )
}

export default NavBar