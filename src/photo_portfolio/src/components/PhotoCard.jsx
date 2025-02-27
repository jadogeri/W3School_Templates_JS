import React from 'react';

const PhotoCard = ({
  src,
  alt,
  className
}) => {
  return (
    <img
    src={src}
    alt={alt}
    className={className}
    width={1000}
    height={500}
  />
  );
}

export default PhotoCard;
