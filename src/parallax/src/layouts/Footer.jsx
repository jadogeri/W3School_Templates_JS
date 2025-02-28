import React from 'react';
import SocialMediaIcon from '../components/SocialMediaIcon';
const Footer = () => {
  return (
    <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
    <a href="#home" className="w3-button w3-light-grey">
      <i className="fa fa-arrow-up w3-margin-right" />
      To the top
    </a>
    <div className="w3-xlarge w3-section">
        <SocialMediaIcon icon="fa-facebook-official" />
        <SocialMediaIcon icon="fa-instagram" />
        <SocialMediaIcon icon="fa-snapchat" />
        <SocialMediaIcon icon="fa-pinterest-p" />
        <SocialMediaIcon icon="fa-twitter" />
        <SocialMediaIcon icon="fa-linkedin" />
    </div>
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-text-green"
      >
        w3.css
      </a>
    </p>
  </footer>
  );
}

export default Footer;

