import React from 'react';
import Comment from '../../components/Comment';

const RecentComments = () => {
  return (
    <section>
      <div className="w3-container">
        <h5>Recent Comments</h5>
        <Comment 
          src="https://w3schools.com/w3images/avatar3.png"
          name="John" date={"Sep 29, 2014, 9:12 PM"}
          message="Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua."
        
        />
          <Comment 
            src="https://w3schools.com/w3images/avatar1.png"
            name="Bo" date={"Sep 28, 2014, 10:15 PM"}
            message="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
          />
      </div>      
    </section>
  );
}

export default RecentComments;
