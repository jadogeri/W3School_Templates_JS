import React from 'react';

const Stat = ({
    type,
    value,
    className,
    style
}) => {
  return (
    <>
        <p>{type}</p>
        <div className="w3-grey">
            <div
                className={className}
                style={style}
            >
               {value}
            </div>
        </div>      
    </>
  );
}

export default Stat;
