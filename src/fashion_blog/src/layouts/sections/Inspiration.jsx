import React from 'react';
import PotraitCard from '../../components/PotraitCard';

const Inspiration = () => {
  return (
    <div className="w3-white w3-margin">
    <div className="w3-container w3-padding w3-black">
      <h4>Inspiration</h4>
    </div>
    <div className="w3-row-padding w3-white">
      <div className="w3-col s6">
        <PotraitCard
          src="https://www.w3schools.com/w3images/jeans.jpg"
          alt="Jeans"
        />
        <PotraitCard
          src="https://www.w3schools.com/w3images/team1.jpg"
          alt="Jeans"
        />
      </div>
      <div className="w3-col s6">
        <PotraitCard
          src="https://www.w3schools.com/w3images/avatar_hat.jpg"
          alt="Men in Hats"
          className="w3-grayscale"
          />
        <PotraitCard
            src="https://www.w3schools.com/w3images/team4.jpg"
            alt="Jeans"
        />
      </div>
    </div>
  </div>
  );
}

export default Inspiration;
