import React from 'react';
import FollowIcon from '../../components/FollowIcon';

const Follow = () => {
  return (
    <div className="w3-white w3-margin">
    <div className="w3-container w3-padding w3-black">
      <h4>Follow Me</h4>
    </div>
    <div className="w3-container w3-xlarge w3-padding">
      <FollowIcon icon="fa-facebook-official"/>
      <FollowIcon icon="fa-instagram"/>
      <FollowIcon icon="fa-snapchat"/>
      <FollowIcon icon="fa-pinterest-p"/>
      <FollowIcon icon="fa-twitter"/>
      <FollowIcon icon="fa-linkedin"/>
    </div>
  </div>
  );
}

export default Follow;
