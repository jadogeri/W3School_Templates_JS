import React from 'react';
import { openModal } from '../../utils/openModal';

const Subscribe = () => {
  return (
    <div className="w3-white w3-margin">
    <div className="w3-container w3-padding w3-black">
      <h4>Subscribe</h4>
    </div>
    <div className="w3-container w3-white">
      <p>
        Enter your e-mail below and get notified on the latest blog posts.
      </p>
      <p>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Enter e-mail"
          style={{ width: "100%" }}
        />
      </p>
      <p>
        <button
          type="button"
          onClick={()=>{openModal()}}         
          className="w3-button w3-block w3-red"
        >
          Subscribe
        </button>
      </p>
    </div>
  </div>
  );
}

export default Subscribe;
