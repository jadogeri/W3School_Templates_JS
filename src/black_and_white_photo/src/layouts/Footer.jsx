import React from 'react';
import SocialMediaIcon from '../components/SocialMediaIcon';

const Footer = () => {
  return (
    <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-large">
        <SocialMediaIcon icon="fa-facebook-official" />
        <SocialMediaIcon icon="fa-instagram" />
        <SocialMediaIcon icon="fa-snapchat" />
        <SocialMediaIcon icon="fa-pinterest-p" />
        <SocialMediaIcon icon="fa-twitter" />
        <SocialMediaIcon icon="fa-linkedin" />
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
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
