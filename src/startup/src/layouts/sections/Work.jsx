import React from 'react'
import { onClick } from '../../utils/onClick'

const Work = () => {
  return (
    <section>
          <div className="w3-container" style={{ padding: "128px 16px" }} id="work">
            <h3 className="w3-center">OUR WORK</h3>
            <p className="w3-center w3-large">What we've done for people</p>
            <div className="w3-row-padding" style={{ marginTop: 64 }}>
              <div className="w3-col l3 m6">
                <img
                  src="https://www.w3schools.com/w3images/tech_mic.jpg"
                  style={{ width: "100%" }}
                  onClick={(event)=>{onClick(event)}}
                  className="w3-hover-opacity"
                  alt="A microphone"
                />
              </div>
              <div className="w3-col l3 m6">
                <img
                  src="https://www.w3schools.com/w3images/tech_phone.jpg"
                  style={{ width: "100%" }}
                  onClick={(event)=>{onClick(event)}}
                  className="w3-hover-opacity"
                  alt="A phone"
                />
              </div>
              <div className="w3-col l3 m6">
                <img
                  src="https://www.w3schools.com/w3images/tech_drone.jpg"
                  style={{ width: "100%" }}
                  onClick={(event)=>{onClick(event)}}
                  className="w3-hover-opacity"
                  alt="A drone"
                />
              </div>
              <div className="w3-col l3 m6">
                <img
                  src="https://www.w3schools.com/w3images/tech_sound.jpg"
                  style={{ width: "100%" }}
                  onClick={(event)=>{onClick(event)}}
                  className="w3-hover-opacity"
                  alt="Soundbox"
                />
              </div>
            </div>
            <div className="w3-row-padding w3-section">
              <div className="w3-col l3 m6">
                <img
                  src="https://www.w3schools.com/w3images/tech_tablet.jpg"
                  style={{ width: "100%" }}
                  onclick="onClick(this)"
                  className="w3-hover-opacity"
                  alt="A tablet"
                />
              </div>
              <div className="w3-col l3 m6">
                <img
                  src="https://www.w3schools.com/w3images/tech_camera.jpg"
                  style={{ width: "100%" }}
                  onClick={(event)=>{onClick(event)}}
                  className="w3-hover-opacity"
                  alt="A camera"
                />
              </div>
              <div className="w3-col l3 m6">
                <img
                  src="https://www.w3schools.com/w3images/tech_typewriter.jpg"
                  style={{ width: "100%" }}
                  onClick={(event)=>{onClick(event)}}
                  className="w3-hover-opacity"
                  alt="A typewriter"
                />
              </div>
              <div className="w3-col l3 m6">
                <img
                  src="https://www.w3schools.com/w3images/tech_tableturner.jpg"
                  style={{ width: "100%" }}
                  onClick={(event)=>{onClick(event)}}
                  className="w3-hover-opacity"
                  alt="A tableturner"
                />
              </div>
            </div>
          </div>

    </section>
    
  )
}

export default Work