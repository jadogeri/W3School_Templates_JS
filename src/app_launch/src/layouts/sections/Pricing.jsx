import React from 'react'

const Pricing = () => {
  return (
    <section>
          <div className="w3-padding-64 w3-center w3-white">
    <h1 className="w3-jumbo">
      <b>Pricing</b>
    </h1>
    <p className="w3-large">Choose a pricing plan that fits your needs.</p>
    <div className="w3-row-padding" style={{ marginTop: 64 }}>
      <div className="w3-half w3-section">
        <ul className="w3-ul w3-card w3-hover-shadow">
          <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
          <li className="w3-padding-16">
            <b>250</b> Photos
          </li>
          <li className="w3-padding-16">
            <b>10</b> Features
          </li>
          <li className="w3-padding-16">
            <b>No</b> Ads
          </li>
          <li className="w3-padding-16">
            <b>Office hours</b> Support
          </li>
          <li className="w3-padding-16">
            <h2 className="w3-opacity">$ 25</h2>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button
              className="w3-button w3-black w3-padding-large"
              onClick={()=>{document.getElementById('download').style.display='block'}}
            >
              <i className="fa fa-download" /> Download
            </button>
          </li>
        </ul>
      </div>
      <div className="w3-half w3-section">
        <ul className="w3-ul w3-card w3-hover-shadow">
          <li className="w3-red w3-xlarge w3-padding-32">Premium</li>
          <li className="w3-padding-16">
            <b>1000</b> Photos
          </li>
          <li className="w3-padding-16">
            <b>50</b> Features
          </li>
          <li className="w3-padding-16">
            <b>No</b> Ads
          </li>
          <li className="w3-padding-16">
            <b>Endless</b> Support
          </li>
          <li className="w3-padding-16">
            <h2 className="w3-opacity">$ 99</h2>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button
              className="w3-button w3-black w3-padding-large"
              onClick={()=>{document.getElementById('download').style.display='block'}}
            >
              {" "}
              <i className="fa fa-download" /> Download
            </button>
          </li>
        </ul>
      </div>
    </div>
    <br />
  </div>
    </section>
  )
}

export default Pricing