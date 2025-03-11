import React from 'react'

const CommentCard = ({
  name,
  date,
  id,
  src,
  message,
  key

}) => {
  return (
    <div key={key}
    className="w3-row w3-margin-bottom"
    id={id}
    style={{ display: "none" }}
  >
    <hr />
    <div className="w3-col l2 m3">
      <img src={src} style={{ width: 90 }} />
    </div>
    <div className="w3-col l10 m9">
      <h4>
        {name}{" "}
        <span className="w3-opacity w3-medium">
         {date}
        </span>
      </h4>
      <p>{message}</p>
    </div>
  </div>
  )
}

export default CommentCard