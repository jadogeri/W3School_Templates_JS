import React from 'react'

const About = () => {
  return (
    <div className="w3-half w3-blue-grey w3-container" style={{ height: 700 }}>
    <div className="w3-padding-64 w3-center">
      <h1>About Me</h1>
      <img
        src="https://www.w3schools.com/w3images/avatar3.png"
        className="w3-margin w3-circle"
        alt="Person"
        style={{ width: "50%" }}
      />
      <div className="w3-left-align w3-padding-large">
        <p>
          Lorem ipusm sed vitae justo condimentum, porta lectus vitae,
          ultricies congue gravida diam non fringilla.
        </p>
        <p>
          Lorem ipusm sed vitae justo condimentum, porta lectus vitae,
          ultricies congue gravida diam non fringilla.
        </p>
      </div>
    </div>
  </div>
  )
}

export default About