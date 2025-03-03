import React from 'react'

const Footer = () => {
  return (
    <footer className="w3-container w3-dark-grey" style={{ padding: 32 }}>
    <a
      href="#"
      className="w3-button w3-black w3-padding-large w3-margin-bottom"
    >
      <i className="fa fa-arrow-up w3-margin-right" />
      To the top
    </a>
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