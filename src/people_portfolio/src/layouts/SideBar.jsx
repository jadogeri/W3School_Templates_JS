import React from 'react'
import { w3_close } from '../utils/w3_close'

const SideBar = () => {
  return (
    <nav
    className="w3-sidebar w3-bar-block w3-white w3-animate-left w3-text-grey w3-collapse w3-top w3-center"
    style={{ zIndex: 3, width: 300, fontWeight: "bold" }}
    id="mySidebar"
  >
    <br />
    <h3 className="w3-padding-64 w3-center">
      <b>
        SOME
        <br />
        NAME
      </b>
    </h3>
    <a
      onClick={()=>{w3_close()}}
      className="w3-bar-item w3-button w3-padding w3-hide-large"
    >
      CLOSE
    </a>
    <a href="#" onClick={()=>{w3_close()}} className="w3-bar-item w3-button">
      PORTFOLIO
    </a>
    <a href="#about" onClick={()=>{w3_close()}} className="w3-bar-item w3-button">
      ABOUT ME
    </a>
    <a href="#contact" onClick={()=>{w3_close()}} className="w3-bar-item w3-button">
      CONTACT
    </a>
  </nav>
  )
}

export default SideBar