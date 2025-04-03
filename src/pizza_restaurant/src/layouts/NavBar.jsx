import React from 'react';

const NavBar = () => {
  return (
    <div className="w3-top w3-hide-small">
    <div
      className="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off"
      id="myNavbar"
    >
      <a href="#" className="w3-bar-item w3-button">
        HOME
      </a>
      <a href="#menu" className="w3-bar-item w3-button">
        MENU
      </a>
      <a href="#about" className="w3-bar-item w3-button">
        ABOUT
      </a>
      <a href="#contact" className="w3-bar-item w3-button">
        CONTACT
      </a>
    </div>
  </div>
  );
}

export default NavBar;
