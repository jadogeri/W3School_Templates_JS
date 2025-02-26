import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <nav>
        <div className="w3-top">
            <div
                className="w3-bar w3-white w3-padding w3-card"
                style={{ letterSpacing: 4 }}
            >
                <Link to="#home" className="w3-bar-item w3-button">
                Gourmet au Catering
                </Link>
                {/* Right-sided navbar links. Hide them on small screens */}
                <div className="w3-right w3-hide-small">
                <Link to="#about" className="w3-bar-item w3-button">
                    About
                </Link>
                <Link to="#menu" className="w3-bar-item w3-button">
                    Menu
                </Link>
                <Link to="#contact" className="w3-bar-item w3-button">
                    Contact
                </Link>
                </div>
            </div>
        </div>
    </nav>
  );
}

export default NavBar;
