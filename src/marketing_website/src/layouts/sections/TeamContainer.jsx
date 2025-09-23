import React from 'react'

const TeamContainer = () => {
  return (
    <section>
          <div className="w3-container w3-padding-64 w3-center" id="team">
    <h2>OUR TEAM</h2>
    <p>Meet the team - our office rats:</p>
    <div className="w3-row">
      <br />
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/avatar.jpg"
          alt="Boss"
          style={{ width: "45%" }}
          className="w3-circle w3-hover-opacity"
        />
        <h3>Johnny Walker</h3>
        <p>Web Designer</p>
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/avatar.jpg"
          alt="Boss"
          style={{ width: "45%" }}
          className="w3-circle w3-hover-opacity"
        />
        <h3>Rebecca Flex</h3>
        <p>Support</p>
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/avatar.jpg"
          alt="Boss"
          style={{ width: "45%" }}
          className="w3-circle w3-hover-opacity"
        />
        <h3>Jan Ringo</h3>
        <p>Boss man</p>
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/avatar.jpg"
          alt="Boss"
          style={{ width: "45%" }}
          className="w3-circle w3-hover-opacity"
        />
        <h3>Kai Ringo</h3>
        <p>Fixer</p>
      </div>
    </div>
  </div>
    </section>
  )
}

export default TeamContainer