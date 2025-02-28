import React from 'react';
import { toggleFunction } from '../utils/toggleFunction';

const NavBar = () => {
  return (

    <div className="w3-bar" id="myNavbar">
      <a
        className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
        onClick={()=>{toggleFunction()}}
        title="Toggle Navigation Menu"
      >
        <i className="fa fa-bars" />
      </a>
      <a href="#home" className="w3-bar-item w3-button">
        HOME
      </a>
      <a href="#about" className="w3-bar-item w3-button w3-hide-small">
        <i className="fa fa-user" /> ABOUT
      </a>
      <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small">
        <i className="fa fa-th" /> PORTFOLIO
      </a>
      <a href="#contact" className="w3-bar-item w3-button w3-hide-small">
        <i className="fa fa-envelope" /> CONTACT
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red"
      >
        <i className="fa fa-search" />
      </a>
    </div>

  );
}

export default NavBar;
