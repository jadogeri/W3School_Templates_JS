import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="w3-center w3-light-grey w3-padding-32">
    <p>
      Powered by{" "}
      <Link
        to="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-text-green"
      >
        w3.css
      </Link>
    </p>
  </footer>
  );
}

export default Footer;
