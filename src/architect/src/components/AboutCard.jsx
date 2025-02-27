import React from 'react';

const AboutCard = ({
    src,
    alt,
    name,
    title,
    description
}) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
        <img src={src} alt={alt} style={{ width: "100%" }} />
        <h3>{name}</h3>
        <p className="w3-opacity">{title}</p>
        <p>
        {description}
        </p>
        <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
        </p>
    </div>
  );
}

export default AboutCard;
