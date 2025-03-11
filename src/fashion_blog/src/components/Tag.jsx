import React from 'react';

const Tag = ({
  label,
  className
}) => {
  return (
    <span className={`w3-tag w3-margin-bottom ${className}`}>{label}</span>
  );
}

export default Tag;
