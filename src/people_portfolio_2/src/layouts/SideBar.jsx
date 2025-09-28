import React from 'react'
import {w3_close} from "../utils/w3_close"

const SideBar = () => {
  return (
  <nav
    className="w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large"
    style={{
      zIndex: 3,
      width: 250,
      fontWeight: "bold",
      display: "none",
      right: 0
    }}
    id="mySidebar"
  >
    <a
      //href="javascript:void()"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-center w3-padding-32"
    >
      CLOSE
    </a>
    <a
      href="#"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-center w3-padding-16"
    >
      PORTFOLIO
    </a>
    <a
      href="#about"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-center w3-padding-16"
    >
      ABOUT ME
    </a>
    <a
      href="#contact"
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-center w3-padding-16"
    >
      CONTACT
    </a>
  </nav>
  )
}

export default SideBar