import React from 'react'

const ImageHeader = () => {
  return (
  <div className="w3-display-container w3-animate-opacity">
    <img
      src="https://www.w3schools.com/w3images/sailboat.jpg"
      alt="boat"
      style={{ width: "100%", minHeight: 350, maxHeight: 600 }}
    />
    <div className="w3-container w3-display-bottomleft w3-margin-bottom">
      <button
        onclick="document.getElementById('id01').style.display='block'"
        className="w3-button w3-xlarge w3-theme w3-hover-teal"
        title="Go To W3.CSS"
      >
        LEARN W3.CSS
      </button>
    </div>
  </div>
  )
}

export default ImageHeader