import React from 'react'
import { w3_close } from '../utils/w3_close'
import { openMail } from '../utils/openMail'

const Message = ({
    id,
    firstTab,
    name,
    src,
    subject,
    message

}) => {
  return (
     <a
        // href="javascript:void(0)"
        className="w3-bar-item w3-button w3-border-bottom test w3-hover-light-grey"
        onClick={()=>{openMail(id);w3_close();}}
        id={firstTab}
      >
        <div className="w3-container">
          <img
            className="w3-round w3-margin-right"
            src={src}
            style={{ width: "15%" }}
          />
          <span className="w3-opacity w3-large">{name}</span>
          {subject}
          <p>{message}</p>
        </div>
      </a>
  )
}

export default Message