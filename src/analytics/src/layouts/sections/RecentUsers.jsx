import React from 'react';
import User from '../../components/User';

const RecentUsers = () => {
  return (
    <section>
        <div className="w3-container">
            <h5>Recent Users</h5>
            <ul className="w3-ul w3-card-4 w3-white">
                <User
                    src="https://w3schools.com/w3images/avatar2.png"
                    title={"Mike"}
                />
                <User
                    src="https://w3schools.com/w3images/avatar5.png"
                    title={"Jill"}
                />
                <User
                    src="https://w3schools.com/w3images/avatar6.png"
                    title={"Jane"}
                />
            </ul>
      </div>
      
    </section>
  );
}

export default RecentUsers;
