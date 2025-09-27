import React from 'react'
import { w3_open } from '../utils/w3_open'

const Header = () => {
  return (
    <header id="portfolio">
      <a href="#">
        <img
          src="https://www.w3schools.com/w3images/avatar_g2.jpg"
          style={{ width: 65 }}
          className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
        />
      </a>
      <span
        className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
        onClick={()=>{w3_open()}}
      >
        <i className="fa fa-bars" />
      </span>
      <div className="w3-container">
        <h1>
          <b>My Portfolio</b>
        </h1>
        <div className="w3-section w3-bottombar w3-padding-16">
          <span className="w3-margin-right">Filter:</span>
          <button className="w3-button w3-black">ALL</button>
          <button className="w3-button w3-white">
            <i className="fa fa-diamond w3-margin-right" />
            Design
          </button>
          <button className="w3-button w3-white w3-hide-small">
            <i className="fa fa-photo w3-margin-right" />
            Photos
          </button>
          <button className="w3-button w3-white w3-hide-small">
            <i className="fa fa-map-pin w3-margin-right" />
            Art
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header