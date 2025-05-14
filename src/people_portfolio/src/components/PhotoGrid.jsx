import React from 'react'
import { onClick } from "../utils/onClick"

const PhotoGrid = () => {
  return (
    <div className="w3-row">
      <div className="w3-third">
        <img
          src="https://www.w3schools.com/w3images/natureboy.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="A boy surrounded by beautiful nature"
        />
        <img
          src="https://www.w3schools.com/w3images/girl_mountain.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="What a beautiful scenery this sunset"
        />
        <img
          src="https://www.w3schools.com/w3images/girl.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="The Beach. Me. Alone. Beautiful"
        />
      </div>
      <div className="w3-third">
        <img
          src="https://www.w3schools.com/w3images/boy.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="Quiet day at the beach. Cold, but beautiful"
        />
        <img
          src="https://www.w3schools.com/w3images/man_bench.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="Waiting for the bus in the desert"
        />
        <img
          src="https://www.w3schools.com/w3images/natureboy.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="Nature again.. At its finest!"
        />
      </div>
      <div className="w3-third">
        <img
          src="https://www.w3schools.com/w3images/girl.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="Canoeing again"
        />
        <img
          src="https://www.w3schools.com/w3images/girl_train.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="A girl, and a train passing"
        />
        <img
          src="https://www.w3schools.com/w3images/closegirl.jpg"
          style={{ width: "100%" }}
          onClick={(e)=>{onClick(e.target)}}
          alt="What a beautiful day!"
        />
      </div>
    </div>
  )
}

export default PhotoGrid