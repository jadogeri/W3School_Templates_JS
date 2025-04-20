import React from 'react'
import { w3_close } from '../utils/w3_close'

const SideBar = () => {
  return (
    <nav
    className="w3-sidebar w3-black w3-animate-top w3-xxlarge"
    style={{ display: "none", paddingTop: 150 }}
    id="mySidebar"
  >
    <a
      onClick={()=>{w3_close()}}
      className="w3-button w3-black w3-xxlarge w3-padding w3-display-topright"
      style={{ padding: "6px 24px" }}
    >
      <i className="fa fa-remove" />
    </a>
    <div className="w3-bar-block w3-center">
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">
        About
      </a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">
        Photos
      </a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">
        Shop
      </a>
      <a href="#" className="w3-bar-item w3-button w3-text-grey w3-hover-black">
        Contact
      </a>
    </div>
  </nav>
  )
}

export default SideBar