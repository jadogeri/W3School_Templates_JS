import React from 'react'
import { myFunction } from '../utils/myFunction'

const AppBar = () => {
  return (
    <nav>
          <div
            id="navDemo"
            className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
            style={{ marginTop: 46 }}
          >
            <a
              href="#band"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={()=>{myFunction()}}
              >
              BAND
            </a>
            <a
              href="#tour"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={()=>{myFunction()}}
              >
              TOUR
            </a>
            <a
              href="#contact"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={()=>{myFunction()}}
              >
              CONTACT
            </a>
            <a
              href="#"
              className="w3-bar-item w3-button w3-padding-large"
              onClick={()=>{myFunction()}}
              >
              MERCH
            </a>
          </div>
    </nav>
  )
}

export default AppBar