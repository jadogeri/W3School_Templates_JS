import React from 'react'

const MessageModal = () => {
  return (
  <div id="id01" className="w3-modal" style={{ zIndex: 4 }}>
    <div className="w3-modal-content w3-animate-zoom">
      <div className="w3-container w3-padding w3-red">
        <span
          onClick={()=>{document.getElementById('id01').style.display='none'}}
          className="w3-button w3-red w3-right w3-xxlarge"
        >
          <i className="fa fa-remove" />
        </span>
        <h2>Send Mail</h2>
      </div>
      <div className="w3-panel">
        <label>To</label>
        <input className="w3-input w3-border w3-margin-bottom" type="text" />
        <label>From</label>
        <input className="w3-input w3-border w3-margin-bottom" type="text" />
        <label>Subject</label>
        <input className="w3-input w3-border w3-margin-bottom" type="text" />
        <input
          className="w3-input w3-border w3-margin-bottom"
          style={{ height: 150 }}
          placeholder="What's on your mind?"
        />
        <div className="w3-section">
          <a
            className="w3-button w3-red"
            onClick={()=>{document.getElementById('id01').style.display='none'}}
          >
            Cancel &nbsp;
            <i className="fa fa-remove" />
          </a>
          <a
            className="w3-button w3-light-grey w3-right"
            onClick={()=>{document.getElementById('id01').style.display='none'}}
          >
            Send &nbsp;
            <i className="fa fa-paper-plane" />
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MessageModal