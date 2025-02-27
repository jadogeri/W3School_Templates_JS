import React from 'react';

const Header = () => {
  return (
    <header
    className="w3-display-container w3-content w3-center"
    style={{ maxWidth: 1500 }}
  >
    <img
      className="w3-image"
      src="https://www.w3schools.com/w3images/photographer.jpg"
      alt="Me"
      width={1500}
      height={600}
    />
    <div className="w3-display-middle w3-padding-large w3-border w3-wide w3-text-light-grey w3-center">
      <h1 className="w3-hide-medium w3-hide-small w3-xxxlarge">JANE DOE</h1>
      <h5 className="w3-hide-large" style={{ whiteSpace: "nowrap" }}>
        JANE DOE
      </h5>
      <h3 className="w3-hide-medium w3-hide-small">PHOTOGRAPHER</h3>
    </div>
    {/* Navbar (placed at the bottom of the header image) */}
    <div
      className="w3-bar w3-light-grey w3-round w3-display-bottommiddle w3-hide-small"
      style={{ bottom: "-16px" }}
    >
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
  </header>
  );
}

export default Header;
