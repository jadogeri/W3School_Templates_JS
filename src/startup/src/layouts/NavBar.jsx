import React from 'react'
import { w3_open } from '../utils/w3_open'

const NavBar = () => {
  return (
    <nav>
          <div className="w3-top">
            <div className="w3-bar w3-white w3-card" id="myNavbar">
              <a href="#home" className="w3-bar-item w3-button w3-wide">
                LOGO
              </a>
              {/* Right-sided navbar links */}
              <div className="w3-right w3-hide-small">
                <a href="#about" className="w3-bar-item w3-button">
                  ABOUT
                </a>
                <a href="#team" className="w3-bar-item w3-button">
                  <i className="fa fa-user" /> TEAM
                </a>
                <a href="#work" className="w3-bar-item w3-button">
                  <i className="fa fa-th" /> WORK
                </a>
                <a href="#pricing" className="w3-bar-item w3-button">
                  <i className="fa fa-usd" /> PRICING
                </a>
                <a href="#contact" className="w3-bar-item w3-button">
                  <i className="fa fa-envelope" /> CONTACT
                </a>
              </div>
              {/* Hide right-floated links on small screens and replace them with a menu icon */}
              <a
                //href="javascript:void(0)"
                className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
              onClick={()=>{w3_open()}}
              >
                <i className="fa fa-bars" />
              </a>
            </div>
          </div>
    </nav>
  )
}

export default NavBar