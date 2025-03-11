import React from 'react';

const Post = ({
  src,
  name,
  title

}) => {
  return (
    <li className="w3-padding-16">
    <img
      src={src}
      alt="Image"
      className="w3-left w3-margin-right"
      style={{ width: 50 }}
    />
    <span className="w3-large">{name}</span>
    <br />
    <span>{title}</span>
  </li>
  );
}

export default Post;
