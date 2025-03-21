import React from 'react';

const Header = () => {
  return (
    <header className="bgimg w3-display-container w3-grayscale-min" id="home">
    <div className="w3-display-bottomleft w3-padding">
      <span className="w3-tag w3-xlarge">Open from 10am to 12pm</span>
    </div>
    <div className="w3-display-middle w3-center">
      <span className="w3-text-white w3-hide-small" style={{ fontSize: 100 }}>
        thin
        <br />
        CRUST PIZZA
      </span>
      <span
        className="w3-text-white w3-hide-large w3-hide-medium"
        style={{ fontSize: 60 }}
      >
        <b>
          thin
          <br />
          CRUST PIZZA
        </b>
      </span>
      <p>
        <a href="#menu" className="w3-button w3-xxlarge w3-black">
          Let me see the menu
        </a>
      </p>
    </div>
  </header>
  );
}

export default Header;
