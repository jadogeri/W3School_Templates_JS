import React from 'react';
import Stat from '../../components/Stat';

const GeneralStats = () => {
  return (
    <section>
        <div className="w3-container">
            <h5>General Stats</h5>
            <Stat 
                className="w3-container w3-center w3-padding w3-green"
                style={{ width: "25%" }}
                type="New Visitors" value="+25%"
            />
            <Stat 
                className="w3-container w3-center w3-padding w3-orange"
                style={{ width: "50%" }}
                type="New Users" value="50%"
            />
            <Stat 
                className="w3-container w3-center w3-padding w3-red"
                style={{ width: "75%" }}
                type="Bounce Rate" value="75%"
            />
        </div>
    </section>

  );
}

export default GeneralStats;
