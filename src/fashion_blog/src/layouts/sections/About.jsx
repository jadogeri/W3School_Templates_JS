import React from 'react';

const About = ({
    src,
    alt,
    title,
    description
}) => {
  return (
    <div className="w3-white w3-margin">
    <img
      src={src}
      alt={alt}
      style={{ width: "100%" }}
      className="w3-grayscale"
    />
    <div className="w3-container w3-black">
      <h4>{title}</h4>
      <p>
        {description}
      </p>
    </div>
  </div>
  );
}

export default About;
