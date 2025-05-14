import React from 'react'

const About = () => {
  return (
    <div
      className="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32"
      id="about"
    >
      <h4>
        <b>About Me</b>
      </h4>
      <img
        src="https://www.w3schools.com/w3images/avatar_hat.jpg"
        alt="Me"
        className="w3-image w3-padding-32"
        width={600}
        height={650}
      />
      <div className="w3-content w3-justify" style={{ maxWidth: 600 }}>
        <h4>My Name</h4>
        <p>
          Some text about me. I love taking photos of PEOPLE. I am lorem ipsum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>mail: example@example.com</p>
        <p>tel: 5353 35531</p>
        <hr className="w3-opacity" />
        <h4 className="w3-padding-16">Technical Skills</h4>
        <p className="w3-wide">Photography</p>
        <div className="w3-white">
          <div
            className="w3-container w3-padding-small w3-center w3-grey"
            style={{ width: "95%" }}
          >
            95%
          </div>
        </div>
        <p className="w3-wide">Web Design</p>
        <div className="w3-white">
          <div
            className="w3-container w3-padding-small w3-center w3-grey"
            style={{ width: "85%" }}
          >
            85%
          </div>
        </div>
        <p className="w3-wide">Photoshop</p>
        <div className="w3-white">
          <div
            className="w3-container w3-padding-small w3-center w3-grey"
            style={{ width: "80%" }}
          >
            80%
          </div>
        </div>
        <p>
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top w3-margin-bottom">
            Download Resume
          </button>
        </p>
        <hr className="w3-opacity" />
        <h4 className="w3-padding-16">How much I charge</h4>
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">5GB Storage</li>
              <li className="w3-padding-16">Mail Support</li>
              <li className="w3-padding-16">
                <h2>$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          <div className="w3-half">
            <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-black w3-xlarge w3-padding-32">Pro</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">50GB Storage</li>
              <li className="w3-padding-16">Endless Support</li>
              <li className="w3-padding-16">
                <h2>$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About