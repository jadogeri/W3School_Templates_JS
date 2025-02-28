import React from 'react';

const NavLink = ({
  href,
  className,
  title,
  icon
}) => {
  return (

  <a href={href} className={className}>
    {icon?<i className={`fa ${icon}}`} /> : <></>} {title}
</a>
  );
}

export default NavLink;
