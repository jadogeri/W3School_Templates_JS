import React from 'react';

const ProjectCard = ({
    src,
    alt,
    width,
    title

}) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
    <div className="w3-display-container">
      <div className="w3-display-topleft w3-black w3-padding">
       ${title}
      </div>
      <img
        src={src}
        alt={alt}
        style={{ width: width }}
      />
    </div>
  </div>
  );
}

export default ProjectCard;
