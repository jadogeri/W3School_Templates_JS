import React from 'react';

const MenuItem = ({
    item,
    description
}) => {
  return (
    <>
        <h5>{item}</h5>
        <p className="w3-text-grey">
            {description}
        </p>
      
    </>
  );
}

export default MenuItem;
