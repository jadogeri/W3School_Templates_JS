import React from 'react';

const InfoCard = ({
    className,
    type,
    list
}) => {
  return (
    <div className="w3-container w3-third">
        <h5 className={className}>{type}</h5>
        {list}
    </div>
  );
}

export default InfoCard;
