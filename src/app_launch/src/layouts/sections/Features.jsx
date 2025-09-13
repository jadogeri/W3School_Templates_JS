import React from 'react'

const Features = () => {
  return (
    <section>
         <div className="w3-container w3-padding-64 w3-dark-grey w3-center">
    <h1 className="w3-jumbo">
      <b>Features</b>
    </h1>
    <p>This app is just so lorem ipsum.</p>
    <div className="w3-row" style={{ marginTop: 64 }}>
      <div className="w3-col s3">
        <i className="fa fa-bolt w3-text-orange w3-jumbo" />
        <p>Fast</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-heart w3-text-red w3-jumbo" />
        <p>Loved</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-camera w3-text-yellow w3-jumbo" />
        <p>Clarity</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-battery-full w3-text-green w3-jumbo" />
        <p>Power</p>
      </div>
    </div>
    <div className="w3-row" style={{ marginTop: 64 }}>
      <div className="w3-col s3">
        <i className="fa fa-diamond w3-text-white w3-jumbo" />
        <p>Sharp</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-cloud w3-text-blue w3-jumbo" />
        <p>Cloud</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-globe w3-text-amber w3-jumbo" />
        <p>Global</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-hdd-o w3-text-cyan w3-jumbo" />
        <p>Storage</p>
      </div>
    </div>
    <div className="w3-row" style={{ marginTop: 64 }}>
      <div className="w3-col s3">
        <i className="fa fa-user w3-text-sand w3-jumbo" />
        <p>Safe</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-shield w3-text-orange w3-jumbo" />
        <p>Stabile</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-wifi w3-text-grey w3-jumbo" />
        <p>Connected</p>
      </div>
      <div className="w3-col s3">
        <i className="fa fa-image w3-text-pink w3-jumbo" />
        <p>HD</p>
      </div>
    </div>
  </div>
    </section>
  )
}

export default Features
