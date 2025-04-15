import React from 'react'
import { w3_close } from '../utils/w3_close'
import { myAccFunc } from '../utils/myAccFunc'

const SideBar = () => {
  return (
    <nav
    className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
    style={{ zIndex: 3, width: 250 }}
    id="mySidebar"
  >
    <div className="w3-container w3-display-container w3-padding-16">
      <i
        onClick={()=>{w3_close()}}
        className="fa fa-remove w3-hide-large w3-button w3-display-topright"
      />
      <h3 className="w3-wide">
        <b>LOGO</b>
      </h3>
    </div>
    <div
      className="w3-padding-64 w3-large w3-text-grey"
      style={{ fontWeight: "bold" }}
    >
      <a href="#" className="w3-bar-item w3-button">
        Shirts
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Dresses
      </a>
      <a
        onClick={()=>{myAccFunc()}}
        className="w3-button w3-block w3-white w3-left-align"
        id="myBtn"
      >
        Jeans <i className="fa fa-caret-down" />
      </a>
      <div
        id="demoAcc"
        className="w3-bar-block w3-hide w3-padding-large w3-medium"
      >
        <a href="#" className="w3-bar-item w3-button w3-light-grey">
          <i className="fa fa-caret-right w3-margin-right" />
          Skinny
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Relaxed
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Bootcut
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Straight
        </a>
      </div>
      <a href="#" className="w3-bar-item w3-button">
        Jackets
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Gymwear
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Blazers
      </a>
      <a href="#" className="w3-bar-item w3-button">
        Shoes
      </a>
    </div>
    <a href="#footer" className="w3-bar-item w3-button w3-padding">
      Contact
    </a>
    <a
      className="w3-bar-item w3-button w3-padding"
      onClick={()=>{document.getElementById('newsletter').style.display='block'}}
    >
      Newsletter
    </a>
    <a href="#footer" className="w3-bar-item w3-button w3-padding">
      Subscribe
    </a>
  </nav>
  )
}

export default SideBar