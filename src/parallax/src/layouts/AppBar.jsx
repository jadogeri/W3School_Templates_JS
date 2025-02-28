import React from 'react'
import AppLink from '../components/AppLink'
import {toggleFunction} from "../utils/toggleFunction"

const AppBar = () => {
  return (
    <nav>
        <div id="navDemo" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
          <AppLink href="#about" className="w3-bar-item w3-button" onClick={()=>{toggleFunction()}} title="ABOUT" />
          <AppLink href="#portfolio" className="w3-bar-item w3-button" onClick={()=>{toggleFunction()}} title="PORTFOLIO" />
          <AppLink href="#contact" className="w3-bar-item w3-button" onClick={()=>{toggleFunction()}} title="CONTACT" />
          <AppLink hhref="#" className="w3-bar-item w3-button" title="SEARCH" />
        </div>
    </nav> 
  )
}

export default AppBar