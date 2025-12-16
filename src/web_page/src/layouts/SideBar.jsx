import React from 'react'
import { w3_close } from "../utils/w3_close"

const SideBar = () => {
  return (
  <nav
    className="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left"
    id="mySidebar"
  >
    <a
      //href="javascript:void(0)"
      onClick={()=>{w3_close()}}
      className="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large"
      title="Close Menu"
    >
      <i className="fa fa-remove" />
    </a>
    <h4 className="w3-bar-item">
      <b>Menu</b>
    </h4>
    <a className="w3-bar-item w3-button w3-hover-black" href="#">
      Link
    </a>
    <a className="w3-bar-item w3-button w3-hover-black" href="#">
      Link
    </a>
    <a className="w3-bar-item w3-button w3-hover-black" href="#">
      Link
    </a>
    <a className="w3-bar-item w3-button w3-hover-black" href="#">
      Link
    </a>
  </nav>
  )
}

export default SideBar