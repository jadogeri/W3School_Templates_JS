import React from 'react'
import SocialMediaIcon from '../components/SocialMediaIcon'

const Footer = () => {
  return (
    <footer className="w3-container w3-padding-64 w3-center w3-opacity">
    <div className="w3-xlarge w3-padding-32">
        <SocialMediaIcon  icon={"fa-facebook-official"}/>
        <SocialMediaIcon  icon={"fa-instagram"}/>
        <SocialMediaIcon  icon={"fa-snapchat"}/>
        <SocialMediaIcon  icon={"fa-pinterest-p"}/>
        <SocialMediaIcon  icon={"fa-twitter"}/>
        <SocialMediaIcon  icon={"fa-linkedin"}/>
    </div>
    <p>
      Powered by{" "}
      <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
        w3.css
      </a>
    </p>
  </footer>
  )
}

export default Footer