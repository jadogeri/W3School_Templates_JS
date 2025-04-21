import React from 'react'
import { w3_open } from '../utils/w3_open'

const Header = () => {
  return (
    <header className="w3-container w3-top w3-hide-large w3-white w3-xlarge w3-padding-16">
    <span className="w3-left w3-padding">SOME NAME</span>
    <a
      className="w3-right w3-button w3-white"
      onClick={()=>{w3_open()}}
    >
      ☰
    </a>
  </header>
  )
}

export default Header