import React from 'react';

const User = ({
    src,
    title,

}) => {
  return (
    <li className="w3-padding-16">
    <img
        src={src}
        className="w3-left w3-circle w3-margin-right"
        style={{ width: 35 }}
        />
        <span className="w3-xlarge">{title}</span>
        <br />
    </li>
  );
}

export default User;
