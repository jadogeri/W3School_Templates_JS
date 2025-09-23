import React from 'react'
import { w3_close } from "../utils/w3_close"

const SideBar = () => {
  return (
  <nav
    className="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left w3-xxlarge"
    style={{ display: "none", zIndex: 2 }}
    id="mySidebar"
  >
    <a
      //href="javascript:void(0)"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-display-topright w3-text-teal"
    >
      Close
      <i className="fa fa-remove" />
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 1
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 2
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 3
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 4
    </a>
    <a href="#" className="w3-bar-item w3-button">
      Link 5
    </a>
  </nav>
  )
}

export default SideBar