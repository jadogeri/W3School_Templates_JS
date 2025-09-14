import React from 'react'

const ReservationForm = () => {
  return (
        <form action="/action_page.php" target="_blank">
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half w3-margin-bottom">
              <label>
                <i className="fa fa-calendar-o" /> Check In
              </label>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="DD MM YYYY"
                name="CheckIn"
                required={false}
              />
            </div>
            <div className="w3-half">
              <label>
                <i className="fa fa-calendar-o" /> Check Out
              </label>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="DD MM YYYY"
                name="CheckOut"
                required={false}
              />
            </div>
          </div>
          <div className="w3-row-padding" style={{ margin: "8px -16px" }}>
            <div className="w3-half w3-margin-bottom">
              <label>
                <i className="fa fa-male" /> Adults
              </label>
              <input
                className="w3-input w3-border"
                type="number"
                defaultValue={1}
                name="Adults"
                min={1}
                max={6}
              />
            </div>
            <div className="w3-half">
              <label>
                <i className="fa fa-child" /> Kids
              </label>
              <input
                className="w3-input w3-border"
                type="number"
                defaultValue={0}
                name="Kids"
                min={0}
                max={6}
              />
            </div>
          </div>
          <button className="w3-button w3-dark-grey" type="submit">
            <i className="fa fa-search w3-margin-right" /> Search availability
          </button>
        </form>
  )
}

export default ReservationForm