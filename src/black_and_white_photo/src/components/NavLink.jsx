import React from 'react';

const NavLink = ({
    href,
    className,
    title
}) => {
  return (
    <a href={href} className={className}>
    {title}
</a>
  );
}

export default NavLink;
