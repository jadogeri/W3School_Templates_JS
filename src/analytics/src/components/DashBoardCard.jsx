import React from 'react';

const DashBoardCard = ({
    color,
    icon,
    value,
    type

}) => {
  return (
    <div className="w3-quarter">
    <div className={`w3-container ${color} w3-padding-16`}>
      <div className="w3-left">
        <i className={`fa ${icon} w3-xxxlarge`} />
      </div>
      <div className="w3-right">
        <h3>{value}</h3>
      </div>
      <div className="w3-clear" />
      <h4>{type}</h4>
    </div>
  </div>
  );
}

export default DashBoardCard;
