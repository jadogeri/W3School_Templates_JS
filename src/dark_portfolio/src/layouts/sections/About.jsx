import React from 'react'
import SkillCard from "../../components/SkillCard"
import LogCard from '../../components/LogCard'

const About = () => {
  return (
    <section>
           <div
      className="w3-content w3-justify w3-text-grey w3-padding-64"
      id="about"  >
      <h2 className="w3-text-light-grey">My Name</h2>
      <hr style={{ width: 200 }} className="w3-opacity" />
      <p>
        Some text about me. Some text about me. I am lorem ipsum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <h3 className="w3-padding-16 w3-text-light-grey">My Skills</h3>
      <SkillCard 
        name="Photography" width="95%"
      />
      <SkillCard 
        name="Web Design" width="85%"
      />
      <SkillCard 
        name="Photoshop" width="80%"
      />
      <br />
      <div className="w3-row w3-center w3-padding-16 w3-section w3-light-grey">
        <LogCard 
          name="Partners" level="11+"        
        />
        <LogCard 
          name="Projects Done" level="55+"        
        />
        <LogCard 
          name="Happy Clients" level="89+"        
        />
        <LogCard 
          name="Meetings" level="150+"        
        />

      </div>
      <button className="w3-button w3-light-grey w3-padding-large w3-section">
        <i className="fa fa-download" /> Download Resume
      </button>
      {/* Grid for pricing tables */}
      <h3 className="w3-padding-16 w3-text-light-grey">My Price</h3>
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-half w3-margin-bottom">
          <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
            <li className="w3-padding-16">Web Design</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">5GB Storage</li>
            <li className="w3-padding-16">Mail Support</li>
            <li className="w3-padding-16">
              <h2>$ 10</h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-white w3-padding-large w3-hover-black">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        <div className="w3-half">
          <ul className="w3-ul w3-white w3-center w3-opacity w3-hover-opacity-off">
            <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
            <li className="w3-padding-16">Web Design</li>
            <li className="w3-padding-16">Photography</li>
            <li className="w3-padding-16">50GB Storage</li>
            <li className="w3-padding-16">Endless Support</li>
            <li className="w3-padding-16">
              <h2>$ 25</h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-light-grey w3-padding-24">
              <button className="w3-button w3-white w3-padding-large w3-hover-black">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
        {/* End Grid/Pricing tables */}
      </div>
      {/* Testimonials */}
      <h3 className="w3-padding-24 w3-text-light-grey">My Reputation</h3>
      <img
        src="https://www.w3schools.com/w3images/bandmember.jpg"
        alt="Avatar"
        className="w3-left w3-circle w3-margin-right"
        style={{ width: 80 }}
      />
      <p>
        <span className="w3-large w3-margin-right">Chris Fox.</span> CEO at
        Mighty Schools.
      </p>
      <p>John Doe saved us from a web disaster.</p>
      <br />
      <img
        src="https://www.w3schools.com/w3images/avatar_g2.jpg"
        alt="Avatar"
        className="w3-left w3-circle w3-margin-right"
        style={{ width: 80 }}
      />
      <p>
        <span className="w3-large w3-margin-right">Rebecca Flex.</span> CEO at
        Company.
      </p>
      <p>No one is better than John Doe.</p>
      {/* End About Section */}
    </div>
    </section>
  )
}

export default About