import React from 'react';
import PhotoCard from "../../components/PhotoCard"

const Portfolio = () => {
  return (
    <>
      <PhotoCard
        src="https://www.w3schools.com/w3images/ocean.jpg"
        alt="Ocean"  className="w3-image"     
      />
      <PhotoCard
        src="https://www.w3schools.com/w3images/ocean2.jpg"
        alt="Ocean II" className="w3-image w3-margin-top"
      />
      <PhotoCard
        src="https://www.w3schools.com/w3images/falls2.jpg"
        alt="Falls" className="w3-image w3-margin-top"
      />
      <PhotoCard
        src="https://www.w3schools.com/w3images/mountainskies.jpg"
        alt="Skies" className="w3-image w3-margin-top"
      />
      <PhotoCard
        src="https://www.w3schools.com/w3images/mountains2.jpg"
        alt="Mountains" className="w3-image w3-margin-top"
      />      
    </>
  );
}

export default Portfolio;
