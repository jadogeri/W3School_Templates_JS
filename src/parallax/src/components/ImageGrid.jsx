import React from 'react';
import { handleClick } from '../utils/handleClick';
import ImageCard from './ImageCard';

const ImageGrid = () => {
  return (
    <>
        <div className="w3-row-padding w3-center">
      <ImageCard        
          src="https://www.w3schools.com/w3images/p1.jpg" style={{ width: "100%" }}
          onClick={(e)=>{handleClick(e)}} className="w3-hover-opacity" alt="The mist over the mountains"
        />   
      <ImageCard
          src="https://www.w3schools.com/w3images/p2.jpg" style={{ width: "100%" }} onClick={(e)=>{handleClick(e)}}
          className="w3-hover-opacity" alt="Coffee beans"
        />
      <ImageCard
          src="https://www.w3schools.com/w3images/p3.jpg" style={{ width: "100%" }} onClick={(e)=>{handleClick(e)}}
          className="w3-hover-opacity" alt="Bear closeup"
        />
      <ImageCard
          src="https://www.w3schools.com/w3images/p4.jpg" style={{ width: "100%" }} onClick={(e)=>{handleClick(e)}}
          className="w3-hover-opacity" alt="Quiet ocean"
        />
    </div>
    <div className="w3-row-padding w3-center w3-section">
      <ImageCard
          src="https://www.w3schools.com/w3images/p5.jpg" style={{ width: "100%" }} onClick={(e)=>{handleClick(e)}}
          className="w3-hover-opacity" alt="The mist"
      />
      <ImageCard
          src="https://www.w3schools.com/w3images/p6.jpg" style={{ width: "100%" }} onClick={(e)=>{handleClick(e)}}
          className="w3-hover-opacity" alt="My beloved typewriter"
        />
      <ImageCard
          src="https://www.w3schools.com/w3images/p7.jpg" style={{ width: "100%" }} onClick={(e)=>{handleClick(e)}}
          className="w3-hover-opacity" alt="Empty ghost train"
      />
      <ImageCard
          src="https://www.w3schools.com/w3images/p8.jpg" style={{ width: "100%" }} onClick={(e)=>{handleClick(e)}}
          className="w3-hover-opacity" alt="Sailing"
        />
      </div>
      
    </>
  );
}

export default ImageGrid;
