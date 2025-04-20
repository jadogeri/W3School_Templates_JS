import React from 'react'

const PhotoGrid = () => {
  return (
    <section>
          <div className="w3-row" id="myGrid" style={{ marginBottom: 128 }}>
      <div className="w3-third">
        <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/sound.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/woods.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/rock.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/mist.jpg" style={{ width: "100%" }} />
      </div>
      <div className="w3-third">
        <img src="https://www.w3schools.com/w3images/coffee.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/bridge.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/notebook.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/london.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/avatar_g.jpg" style={{ width: "100%" }} />
      </div>
      <div className="w3-third">
        <img src="https://www.w3schools.com/w3images/mist.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/workbench.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/gondol.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/skies.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/lights.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/workshop.jpg" style={{ width: "100%" }} />
      </div>
    </div>
    </section>
  )
}

export default PhotoGrid