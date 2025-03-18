import React from 'react';
import InfoCard from '../../components/InfoCard';

const InfoBoard = () => {
  return (
    <section>
        <div className="w3-container w3-dark-grey w3-padding-32">
            <div className="w3-row">
                <InfoCard
                   className="w3-bottombar w3-border-green"
                   type="Demographic" 
                   list={
                        <>
                            <p>Language</p>
                            <p>Country</p>
                            <p>City</p>
                        </>
                    }
                />
                 <InfoCard
                   className="w3-bottombar w3-border-red"
                   type="System" 
                   list={
                        <>
                            <p>Browser</p>
                            <p>OS</p>
                            <p>More</p>
                        </>
                    }
                />  
                 <InfoCard
                   className="w3-bottombar w3-border-orange"
                   type="Target" 
                   list={
                        <>
                            <p>Users</p>
                            <p>Active</p>
                            <p>Geo</p>
                            <p>Interests</p>
                        </>
                    }
                />  

            </div>
        </div>
      
    </section>
  );
}

export default InfoBoard;
