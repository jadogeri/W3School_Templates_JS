import React from 'react';
import { handleCloseModal } from '../utils/handleCloseModal';

const ImageModal = () => {
  return (
    <div
    id="modal01"
    className="w3-modal w3-black"     
  >
    <span
      className="w3-button w3-large w3-black w3-display-topright"
      title="Close Modal Image"
      onClick={()=>{handleCloseModal()}}
    >
      <i className="fa fa-remove"  />
    </span>
    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" className="w3-image" />
      <p id="caption" className="w3-opacity w3-large" />
    </div>
  </div>
  );
}

export default ImageModal;
