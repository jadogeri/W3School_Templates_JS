import { currentDiv } from "../App"
const SlideShowCarousel = () => {
  return (
    <div className="w3-row-padding w3-section">
      <div className="w3-col s3">
        <img
          className="demo w3-opacity w3-hover-opacity-off"
          src="https://www.w3schools.com/w3images/livingroom.jpg"
          style={{ width: "100%", cursor: "pointer" }}
          onClick={()=>{currentDiv(1)}}
          title="Living room"
        />
      </div>
      <div className="w3-col s3">
        <img
          className="demo w3-opacity w3-hover-opacity-off"
          src="https://www.w3schools.com/w3images/diningroom.jpg"
          style={{ width: "100%", cursor: "pointer" }}
          onClick={()=>{currentDiv(2)}}
          title="Dining room"
        />
      </div>
      <div className="w3-col s3">
        <img
          className="demo w3-opacity w3-hover-opacity-off"
          src="https://www.w3schools.com/w3images/bedroom.jpg"
          style={{ width: "100%", cursor: "pointer" }}
          onClick={()=>{currentDiv(3)}}
          title="Bedroom"
        />
      </div>
      <div className="w3-col s3">
        <img
          className="demo w3-opacity w3-hover-opacity-off"
          src="https://www.w3schools.com/w3images/livingroom2.jpg"
          style={{ width: "100%", cursor: "pointer" }}
          onClick={()=>{currentDiv(4)}}
          title="Second Living Room"
        />
      </div>
    </div>
  )
}

export default SlideShowCarousel