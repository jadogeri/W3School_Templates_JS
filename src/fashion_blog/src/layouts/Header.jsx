import React from 'react';

const Header = ({
    company,
    name
}) => {
  return (
    <header className="w3-container w3-center w3-padding-48 w3-white">
      <h1 className="w3-xxxlarge">
        <b>{company}</b>
      </h1>
      <h6>
        Welcome to the blog of <span className="w3-tag">{name}</span>
      </h6>
    </header>
  );
}

export default Header;
