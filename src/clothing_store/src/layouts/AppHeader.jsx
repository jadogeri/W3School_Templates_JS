import React from 'react'
import { w3_open } from '../utils/w3_open'

const AppHeader = () => {
  return (
    <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
    <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
    <a
      className="w3-bar-item w3-button w3-padding-24 w3-right"
      onClick={()=>{w3_open()}}
    >
      <i className="fa fa-bars" />
    </a>
  </header>
  )
}

export default AppHeader