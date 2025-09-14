import React from 'react'

const RoomSearch = () => {
  return (
    <div className="w3-row-padding">
      <div className="w3-col m3">
        <label>
          <i className="fa fa-calendar-o" /> Check In
        </label>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="DD MM YYYY"
        />
      </div>
      <div className="w3-col m3">
        <label>
          <i className="fa fa-calendar-o" /> Check Out
        </label>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="DD MM YYYY"
        />
      </div>
      <div className="w3-col m2">
        <label>
          <i className="fa fa-male" /> Adults
        </label>
        <input className="w3-input w3-border" type="number" placeholder={"1"} />
      </div>
      <div className="w3-col m2">
        <label>
          <i className="fa fa-child" /> Kids
        </label>
        <input className="w3-input w3-border" type="number" placeholder={"0"} />
      </div>
      <div className="w3-col m2">
        <label>
          <i className="fa fa-search" /> Search
        </label>
        <button className="w3-button w3-block w3-black">Search</button>
      </div>
    </div>
  )
}

export default RoomSearch