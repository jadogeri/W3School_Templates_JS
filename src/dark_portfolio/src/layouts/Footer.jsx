import React from 'react'

const Footer = () => {
  return (
    <footer className="w3-content w3-padding-64 w3-text-grey w3-xlarge">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
      <p className="w3-medium">
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="_blank"
          className="w3-hover-text-green"
        >
          w3.css
        </a>
      </p>
      {/* End footer */}
    </footer>  )
}

export default Footer