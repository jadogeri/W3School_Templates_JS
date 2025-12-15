import React from 'react'
import { w3_close } from '../utils/w3_close'

const SideBar = () => {
  return (
    <nav>
          <nav
            className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large"
            style={{ display: "none" }}
            id="mySidebar"
          >
            <a
              //href="javascript:void(0)"
              onClick={()=>{w3_close()}}
              className="w3-bar-item w3-button w3-large w3-padding-16"
            >
              Close ×
            </a>
            <a href="#about" onClick={()=>{w3_close()}} className="w3-bar-item w3-button">
              ABOUT
            </a>
            <a href="#team" onClick={()=>{w3_close()}} className="w3-bar-item w3-button">
              TEAM
            </a>
            <a href="#work" onClick={()=>{w3_close()}} className="w3-bar-item w3-button">
              WORK
            </a>
            <a href="#pricing" onClick={()=>{w3_close()}} className="w3-bar-item w3-button">
              PRICING
            </a>
            <a href="#contact" onClick={()=>{w3_close()}} className="w3-bar-item w3-button">
              CONTACT
            </a>
          </nav>
    </nav>
  )
}

export default SideBar