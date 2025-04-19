import React from 'react'
import { openLink } from '../utils/openLink'
import "../App.css"

const Header = () => {
  return (
    <header
    className="w3-display-container w3-content w3-hide-small"
    style={{ maxWidth: 1500 }} >
    <img
      className="w3-image"
      src="https://www.w3schools.com/w3images/london2.jpg"
      alt="London"
      width={1500}
      height={700}
    />
    <div className="w3-display-middle" style={{ width: "65%" }}>
      <div className="w3-bar w3-black">
        <button
          className="w3-bar-item w3-button tablink"
          onClick={(event)=>{openLink(event, 'Flight')}}
        >
          <i className="fa fa-plane w3-margin-right" />
          Flight
        </button>
        <button
          className="w3-bar-item w3-button tablink"
          onClick={(event)=>{openLink(event, 'Hotel')}}
        >
          <i className="fa fa-bed w3-margin-right" />
          Hotel
        </button>
        <button
          className="w3-bar-item w3-button tablink"
          onClick={(event)=>{openLink(event, 'Car')}}
        >
          <i className="fa fa-car w3-margin-right" />
          Rental
        </button>
      </div>
      {/* Tabs */}
      <div id="Flight" className="w3-container w3-white w3-padding-16 myLink"          
       style={{display : "block"}}
      >
        <h3>Travel the world with us</h3>
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-half">
            <label>From</label>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Departing from"
            />
          </div>
          <div className="w3-half">
            <label>To</label>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Arriving at"
            />
          </div>
        </div>
        <p>
          <button className="w3-button w3-dark-grey">
            Search and find dates
          </button>
        </p>
      </div>
      <div id="Hotel" className="w3-container w3-white w3-padding-16 myLink">
        <h3>Find the best hotels</h3>
        <p>Book a hotel with us and get the best fares and promotions.</p>
        <p>We know hotels - we know comfort.</p>
        <p>
          <button className="w3-button w3-dark-grey">Search Hotels</button>
        </p>
      </div>
      <div id="Car" className="w3-container w3-white w3-padding-16 myLink">
        <h3>Best car rental in the world!</h3>
        <p>
          <span className="w3-tag w3-deep-orange">DISCOUNT!</span> Special offer
          if you book today: 25% off anywhere in the world with
          CarServiceRentalRUs
        </p>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Pick-up point"
        />
        <p>
          <button className="w3-button w3-dark-grey">
            Search Availability
          </button>
        </p>
      </div>
    </div>
  </header>
  )
}

export default Header
