import React from 'react';
import NavLink from '../components/NavLink';

const Header = () => {
  return (
    <header
      className="w3-panel w3-center w3-opacity"
      style={{ padding: "128px 16px" }}
    >
      <h1 className="w3-xlarge">PHOTOGRAPHER</h1>
      <h1>John Doe</h1>
      <nav>
        <div className="w3-padding-32">
            <div className="w3-bar w3-border">
                <NavLink 
                    href="#" className="w3-bar-item w3-button" title="Home"
                />
                <NavLink 
                    href="#" className="w3-bar-item w3-button w3-light-grey" title="Portfolio"
                />
                <NavLink 
                    href="#" className="w3-bar-item w3-button"title="Contact"
                />
                <NavLink 
                    href="#" className="w3-bar-item w3-button w3-hide-small"title="Weddings"
                />
            </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;
