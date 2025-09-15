import React from 'react'

const PricingTable = () => {
  return (
   <div className="w3-row-padding">
      <div className="w3-half w3-margin-bottom">
        <ul className="w3-ul w3-light-grey w3-center">
          <li className="w3-dark-grey w3-xlarge w3-padding-32">Basic</li>
          <li className="w3-padding-16">Floorplanning</li>
          <li className="w3-padding-16">10 hours support</li>
          <li className="w3-padding-16">Photography</li>
          <li className="w3-padding-16">20% furniture discount</li>
          <li className="w3-padding-16">Good deals</li>
          <li className="w3-padding-16">
            <h2>$ 199</h2>
            <span className="w3-opacity">per room</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-white w3-padding-large w3-hover-black">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div className="w3-half">
        <ul className="w3-ul w3-light-grey w3-center">
          <li className="w3-red w3-xlarge w3-padding-32">Pro</li>
          <li className="w3-padding-16">Floorplanning</li>
          <li className="w3-padding-16">50 hours support</li>
          <li className="w3-padding-16">Photography</li>
          <li className="w3-padding-16">50% furniture discount</li>
          <li className="w3-padding-16">GREAT deals</li>
          <li className="w3-padding-16">
            <h2>$ 249</h2>
            <span className="w3-opacity">per room</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-red w3-padding-large w3-hover-black">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PricingTable