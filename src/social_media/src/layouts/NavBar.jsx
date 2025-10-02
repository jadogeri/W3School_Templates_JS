import React from 'react'
import { openNav } from '../utils/openNav'

const NavBar = () => {
  return (
    <nav>
          <div className="w3-top">
    <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
      <a
        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
        //href="javascript:void(0);"
        onClick={()=>{openNav()}}
      >
        <i className="fa fa-bars" />
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-padding-large w3-theme-d4"
      >
        <i className="fa fa-home w3-margin-right" />
        Logo
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="News"
      >
        <i className="fa fa-globe" />
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="Account Settings"
      >
        <i className="fa fa-user" />
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
        title="Messages"
      >
        <i className="fa fa-envelope" />
      </a>
      <div className="w3-dropdown-hover w3-hide-small">
        <button className="w3-button w3-padding-large" title="Notifications">
          <i className="fa fa-bell" />
          <span className="w3-badge w3-right w3-small w3-green">3</span>
        </button>
        <div
          className="w3-dropdown-content w3-card-4 w3-bar-block"
          style={{ width: 300 }}
        >
          <a href="#" className="w3-bar-item w3-button">
            One new friend request
          </a>
          <a href="#" className="w3-bar-item w3-button">
            John Doe posted on your wall
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Jane likes your post
          </a>
        </div>
      </div>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
        title="My Account"
      >
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          className="w3-circle"
          style={{ height: 23, width: 23 }}
          alt="Avatar"
        />
      </a>
    </div>
  </div>
    </nav>
  )
}

export default NavBar