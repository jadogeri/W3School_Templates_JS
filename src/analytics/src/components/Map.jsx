import React from 'react';

const Map = ({
    src,
    alt,
    style
}) => {
  return (
    <img
        style={style}
        src={src}
        alt={alt}
      
    />
  );
}

export default Map;
