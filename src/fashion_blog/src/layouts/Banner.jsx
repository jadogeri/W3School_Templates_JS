import React from 'react';
import { openModal } from '../utils/openModal';

const Banner = ({
    src,
    alt,
    company,
    description
}) => {
  return (
<header className="w3-display-container w3-wide" id="home">
      <img
        className="w3-image"
        src={src}
        alt={alt}
        width={1600}
        height={1060}
      />
      <div className="w3-display-left w3-padding-large">
        <h1 className="w3-text-white">{company}</h1>
        <h1 className="w3-jumbo w3-text-white w3-hide-small">
          <b>{description} BLOG</b>
        </h1>
        <h6>
          <button
            className="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off"
            onClick={()=>{openModal()}}          >
            SUBSCRIBE
          </button>
        </h6>
      </div>
    </header>
  );
}

export default Banner;
