import React from 'react';

const ImageCard = ({
    src,
    style,
    onClick,
    className,
    alt
}) => {
  return (
      <div className="w3-col m3">
        <img
            src={src}
        style={style}
        onClick={onClick}
        className={className}
        alt={alt}
        />
      </div>
  );
}

export default ImageCard;
