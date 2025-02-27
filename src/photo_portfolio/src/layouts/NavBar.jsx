import React from 'react';
const NavBar = () => {
  return (
   <nav>
      <div className="w3-center w3-light-grey w3-padding-16 w3-hide-large w3-hide-medium">
            <div className="w3-bar w3-light-grey">
            <a href="#" className="w3-bar-item w3-button">
                Home
            </a>
            <a href="#portfolio" className="w3-bar-item w3-button">
                Portfolio
            </a>
            <a href="#contact" className="w3-bar-item w3-button">
                Contact
            </a>
            </div>
        </div>
   </nav>
  );
}

export default NavBar;
