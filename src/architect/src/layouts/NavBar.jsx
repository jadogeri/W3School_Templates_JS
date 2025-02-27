import React from 'react';
import NavLink from '../components/NavLink';

const NavBar = () => {
  return (
    <div className="w3-top">
    <div className="w3-bar w3-white w3-wide w3-padding w3-card">
      <a href="#home" className="w3-bar-item w3-button">
        <b>BR</b> Architects
      </a>
      {/* Float links to the right. Hide them on small screens */}
      <div className="w3-right w3-hide-small">
        <NavLink 
            href="#projects" title="Projects"
        />
        <NavLink 
            href="#about" title="About"
        />
        <NavLink  
            href="#contact" title="Contact"
        />
      </div>
    </div>
  </div>
  );
}

export default NavBar;
