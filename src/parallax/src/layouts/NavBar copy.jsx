import React from 'react';
import NavLink from '../components/NavLink';
import {toggleFunction} from "../utils/toggleFunction"

const NavBar = () => {
  return (
    <nav>
        <div className="w3-bar" id="myNavbar">
            <a
                className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
                onClick={()=>{toggleFunction()}}
                title="Toggle Navigation Menu"
            >
                <i className="fa fa-bars" />
            </a>
            <NavLink href="#home" className="w3-bar-item w3-button" title="HOME"
            />
            <NavLink href="#about" className="w3-bar-item w3-button w3-hide-small" icon="fa-user" title="ABOUT"
            />
            <NavLink href="#portfolio" className="w3-bar-item w3-button w3-hide-small" icon="fa-th" title="PORTFOLIO"
            />
            <NavLink href="#contact" className="w3-bar-item w3-button w3-hide-small" icon="fa-envelope" title="CONTACT"
            />
            <a
                href="#"
                className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red"
            >
                <i className="fa fa-search" />
            </a>
        </div>
    </nav>
  );
}

export default NavBar;
