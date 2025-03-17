import React from 'react';

const ImageCard = ({
    src,
    alt,
    className,
    title,
    description
}) => {
  return (
    <div className="w3-half w3-container">
      <div className={className}>
        <img src={src} style={{ width: "100%" }} alt={alt}  />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
