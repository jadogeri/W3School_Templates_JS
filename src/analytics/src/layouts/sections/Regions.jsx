import React from 'react';
import Map from '../../components/Map';
const Regions = () => {
  return (
    <div className="w3-third">
        <h5>Regions</h5>
        <Map
            src="https://w3schools.com/w3images/region.jpg"
            style={{ width: "100%" }}
            alt="Google Regional Map"
        />
     </div>
  );
}

export default Regions;
