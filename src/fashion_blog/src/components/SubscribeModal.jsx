import React from 'react';
import { closeModal } from '../utils/closeModal';

const SubscribeModal = () => {
  return (
    <div id="subscribe" className="w3-modal w3-animate-opacity">
    <div className="w3-modal-content" style={{ padding: 32 }}>
      <div className="w3-container w3-white">
        <i
          onClick={()=>{closeModal()}}
          className="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"
        />
        <h2 className="w3-wide">SUBSCRIBE</h2>
        <p>
          Join my mailing list to receive updates on the latest blog posts and
          other things.
        </p>
        <p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Enter e-mail"
          />
        </p>
        <button
          type="button"
          className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
          onClick={()=>{closeModal()}}
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
  );
}

export default SubscribeModal;
