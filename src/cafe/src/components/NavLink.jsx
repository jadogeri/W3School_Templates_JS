import React from 'react';

const NavLink = ({
    href,
    name
}) => {
  return (
    <nav>
        <div className="w3-col s3">
            <a href={href} className="w3-button w3-block w3-black">
            {name}
            </a>
        </div>
      
    </nav>
  );
}

export default NavLink;
