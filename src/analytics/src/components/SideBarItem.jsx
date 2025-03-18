import React from 'react';

const SideBarItem = ({
    href,
    className,
    name,
    icon
}) => {
  return (
    <a href={href} className={className}>
    <i className={icon} />
    &nbsp; {name}
  </a>
  );
}

export default SideBarItem;
