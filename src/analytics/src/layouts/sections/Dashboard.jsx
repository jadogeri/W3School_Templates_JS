import React from 'react';
import DashBoardCard from '../../components/DashBoardCard';

const Dashboard = () => {
  return (
    <section>
        <div className="w3-row-padding w3-margin-bottom">
            <DashBoardCard 
                color={"w3-red"} icon={"fa-comment"}
                value={52} type={"Messages"}
            />
            <DashBoardCard 
                color={"w3-blue"} icon={"fa-eye"}
                value={59} type={"Views"}
            />
            <DashBoardCard 
                color={"w3-teal"} icon={"fa-share-alt"}
                value={23} type={"Shares"}
            />
            <DashBoardCard 
                color={"w3-orange w3-text-white"} icon={"fa-users"}
                value={50} type={"Users"}
            />  

      </div>
      
    </section>
  );
}

export default Dashboard;
