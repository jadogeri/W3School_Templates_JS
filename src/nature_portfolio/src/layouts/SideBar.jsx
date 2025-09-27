import React from 'react'
import { w3_close } from "../utils/w3_close"

const SideBar = () => {
  return (
  <nav
    className="w3-sidebar w3-collapse w3-white w3-animate-left"
    style={{ zIndex: 3, width: 300 }}
    id="mySidebar"
  >
    <br />
    <div className="w3-container">
      <a
        href="#"
        onClick={()=>{w3_close()}}
        className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
        title="close menu"
      >
        <i className="fa fa-remove" />
      </a>
      <img
        src="https://www.w3schools.com/w3images/avatar_g2.jpg"
        style={{ width: "45%" }}
        className="w3-round"
      />
      <br />
      <br />
      <h4>
        <b>PORTFOLIO</b>
      </h4>
      <p className="w3-text-grey">Template by W3.CSS</p>
    </div>
    <div className="w3-bar-block">
      <a
        href="#portfolio"
        onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-padding w3-text-teal"
      >
        <i className="fa fa-th-large fa-fw w3-margin-right" />
        PORTFOLIO
      </a>
      <a
        href="#about"
        onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-padding"
      >
        <i className="fa fa-user fa-fw w3-margin-right" />
        ABOUT
      </a>
      <a
        href="#contact"
        onClick={()=>{w3_close()}}
        className="w3-bar-item w3-button w3-padding"
      >
        <i className="fa fa-envelope fa-fw w3-margin-right" />
        CONTACT
      </a>
    </div>
    <div className="w3-panel w3-large">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
    </div>
  </nav>
  )
}

export default SideBar