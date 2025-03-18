import React from 'react';
import Feed from '../../components/Feed';

const Feeds = () => {
  return (
    <section>
      <div className="w3-twothird">
            <h5>Feeds</h5>
            <table className="w3-table w3-striped w3-white">
              <tbody>
                <Feed
                  className="fa fa-user w3-text-blue w3-large" 
                  type="New record, over 90 views."
                  value="10 mins"
                />
                <Feed
                  className="fa fa-bell w3-text-red w3-large" 
                  type="Database error."
                  value="15 mins"
                />
                <Feed
                  className="fa fa-users w3-text-yellow w3-large" 
                  type="New record, over 40 users."
                  value="17 mins"
                />
                <Feed
                  className="fa fa-comment w3-text-red w3-large" 
                  type="New comments."
                  value="25 mins"
                />
                <Feed
                  className="fa fa-bookmark w3-text-blue w3-large" 
                  type="Check transactions."
                  value="28 mins"
                /> 
                <Feed
                  className="fa fa-laptop w3-text-red w3-large" 
                  type="CPU overload."
                  value="35 mins"
                />                                  
                <Feed
                  className="fa fa-share-alt w3-text-green w3-large" 
                  type="New shares."
                  value="39 mins"
                />   
              </tbody>
            </table>
          </div>
      
    </section>
  );
}

export default Feeds;
