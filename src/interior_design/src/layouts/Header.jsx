import React from 'react'
import {w3_open} from "../utils/w3_open"

const Header = () => {
  return (
  <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
    <a
      className="w3-button w3-red w3-margin-right"
      onClick={()=>{w3_open()}}
    >
      ☰
    </a>
    <span>Company Name</span>
  </header>
  )
}

export default Header