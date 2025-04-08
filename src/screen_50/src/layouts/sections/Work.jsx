import React from 'react'

const Work = () => {
  return (
    <div
      className="w3-half w3-light-grey w3-center"
      style={{ minHeight: 800 }}
      id="work"
    >
      <div className="w3-padding-64">
        <h2>My Work</h2>
        <p>Some of my latest projects.</p>
      </div>
      <div className="w3-row">
        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/coffee.jpg" style={{ width: "100%" }} />
        </div>
        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/workbench.jpg" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="w3-row w3-hide-small">
        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/workbench.jpg" style={{ width: "100%" }} />
        </div>
        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/coffee.jpg" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="w3-row w3-hide-small">
        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/sound.jpg" style={{ width: "100%" }} />
        </div>
        <div className="w3-half">
          <img src="https://www.w3schools.com/w3images/workbench.jpg" style={{ width: "100%" }} />
        </div>
      </div>
      <br />
      <p>Just call me awesome.</p>
    </div>
  )
}

export default Work

