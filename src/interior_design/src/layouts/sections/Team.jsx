import React from 'react'

const Team = () => {
  return (
    <section>
          <div className="w3-row-padding w3-grayscale">
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>John Doe</h3>
            <p className="w3-opacity">CEO &amp; Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Jane Doe</h3>
            <p className="w3-opacity">Designer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>
      <div className="w3-col m4 w3-margin-bottom">
        <div className="w3-light-grey">
          <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Mike Ross</h3>
            <p className="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Team