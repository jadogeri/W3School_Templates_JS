import React from 'react';
import NavLink from '../components/NavLink';

const NavBar = () => {
  return (
    <nav>
<div className="w3-top">
  <div
    className="w3-bar w3-white w3-padding w3-card"
    style={{ letterSpacing: 4 }}
  >
    <a href="#home" className="w3-bar-item w3-button">
      Gourmet au Catering
    </a>
    {/* Right-sided navbar links. Hide them on small screens */}
    <div className="w3-right w3-hide-small">
      <NavLink href="#about" title="About" />
      <NavLink href="#menu" title="Menu" />
      <NavLink href="#contact" title="Contact" />
    </div>
  </div>
</div>

    </nav>
  );
}

export default NavBar;
