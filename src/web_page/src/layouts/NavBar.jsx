import React from 'react'
import {w3_open} from "../utils/w3_open"

const NavBar = () => {
  return (
    <nav>
  <div className="w3-top">
    <div className="w3-bar w3-theme w3-top w3-left-align w3-large">
      <a
        className="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
        // href="javascript:void(0)"
        onClick={()=>{w3_open()}}
      >
        <i className="fa fa-bars" />
      </a>
      <a href="#" className="w3-bar-item w3-button w3-theme-l1">
        Logo
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        About
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        Values
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        News
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        Contact
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-hover-white"
      >
        Clients
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-hover-white"
      >
        Partners
      </a>
    </div>
  </div>
  </nav>
  )
}

export default NavBar