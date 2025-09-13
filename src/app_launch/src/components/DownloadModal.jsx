import React from 'react'

const DownloadModal = () => {
  return (
  <div id="download" className="w3-modal w3-animate-opacity">
    <div className="w3-modal-content" style={{ padding: 32 }}>
      <div className="w3-container w3-white">
        <i
          onClick={()=>{document.getElementById('download').style.display='none'}}
          className="fa fa-remove w3-xlarge w3-button w3-transparent w3-right w3-xlarge"
        />
        <h2 className="w3-wide">DOWNLOAD</h2>
        <p>Download the app in AppStore, Google Play or Microsoft Store.</p>
        <i className="fa fa-android w3-large" />{" "}
        <i className="fa fa-apple w3-large" />{" "}
        <i className="fa fa-windows w3-large" />
        <p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Enter e-mail"
          />
        </p>
        <button
          type="button"
          className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
          onClick={()=>{document.getElementById('download').style.display='none'}}
        >
          Fake Download
        </button>
      </div>
    </div>
  </div>
  )
}

export default DownloadModal