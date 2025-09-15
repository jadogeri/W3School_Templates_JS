import React from 'react'
import { w3_close } from "../utils/w3_close"

const SideBar = () => {
  return (
      <nav
    className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding"
    style={{ zIndex: 3, width: 300, fontWeight: "bold" }}
    id="mySidebar"
  >
    <br />
    <a
      href="javascript:void(0)"
       onClick={()=>{w3_close()}}
      className="w3-button w3-hide-large w3-display-topleft"
      style={{ width: "100%", fontSize: 22 }}
    >
      Close Menu
    </a>
    <div className="w3-container">
      <h3 className="w3-padding-64">
        <b>
          Company
          <br />
          Name
        </b>
      </h3>
    </div>
    <div className="w3-bar-block">
      <a
        href="#"
         onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-hover-white"
      >
        Home
      </a>
      <a
        href="#showcase"
         onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-hover-white"
      >
        Showcase
      </a>
      <a
        href="#services"
         onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-hover-white"
      >
        Services
      </a>
      <a
        href="#designers"
         onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-hover-white"
      >
        Designers
      </a>
      <a
        href="#packages"
         onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-hover-white"
      >
        Packages
      </a>
      <a
        href="#contact"
         onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-hover-white"
      >
        Contact
      </a>
    </div>
  </nav>
  )
}

export default SideBar