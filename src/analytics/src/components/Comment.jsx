import React from 'react';

const Comment = ({
    src,
    date,
    name,
    message
}) => {
  return (
    <div className="w3-row">
        <div className="w3-col m2 text-center">
            <img
                className="w3-circle"
                src={src}
                style={{ width: 96, height: 96 }}
            />
        </div>
        <div className="w3-col m10 w3-container">
            <h4>
                {name}{" "}
                <span className="w3-opacity w3-medium">{date}</span>
            </h4>
            <p>
                {message}
            </p>
            <br />
        </div>
    </div>
  );
}

export default Comment;
