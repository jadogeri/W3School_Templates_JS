import React from 'react'

const SlideShowHeader = () => {
  return (
    <div className="w3-container" id="apartment">
      <h2 className="w3-text-green">The Apartment</h2>
      <div className="w3-display-container mySlides">
        <img
          src="https://www.w3schools.com/w3images/livingroom.jpg"
          style={{ width: "100%", marginBottom: "-6px" }}
        />
        <div className="w3-display-bottomleft w3-container w3-black">
          <p>Living Room</p>
        </div>
      </div>
      <div className="w3-display-container mySlides">
        <img
          src="https://www.w3schools.com/w3images/diningroom.jpg"
          style={{ width: "100%", marginBottom: "-6px" }}
        />
        <div className="w3-display-bottomleft w3-container w3-black">
          <p>Dining Room</p>
        </div>
      </div>
      <div className="w3-display-container mySlides">
        <img
          src="https://www.w3schools.com/w3images/bedroom.jpg"
          style={{ width: "100%", marginBottom: "-6px" }}
        />
        <div className="w3-display-bottomleft w3-container w3-black">
          <p>Bedroom</p>
        </div>
      </div>
      <div className="w3-display-container mySlides">
        <img
          src="https://www.w3schools.com/w3images/livingroom2.jpg"
          style={{ width: "100%", marginBottom: "-6px" }}
        />
        <div className="w3-display-bottomleft w3-container w3-black">
          <p>Living Room II</p>
        </div>
      </div>
    </div>
  )
}

export default SlideShowHeader