import React from 'react'

const Contact = () => {
  return (
    <section>
          <div className="w3-container w3-padding-64 w3-theme-l5" id="contact">
    <div className="w3-row">
      <div className="w3-col m5">
        <div className="w3-padding-16">
          <span className="w3-xlarge w3-border-teal w3-bottombar">
            Contact Us
          </span>
        </div>
        <h3>Address</h3>
        <p>Swing by for a cup of coffee, or whatever.</p>
        <p>
          <i className="fa fa-map-marker w3-text-teal w3-xlarge" />
          &nbsp;&nbsp;Chicago, US
        </p>
        <p>
          <i className="fa fa-phone w3-text-teal w3-xlarge" />
          &nbsp;&nbsp;+00 1515151515
        </p>
        <p>
          <i className="fa fa-envelope-o w3-text-teal w3-xlarge" />
          &nbsp;&nbsp;test@test.com
        </p>
      </div>
      <div className="w3-col m7">
        <form
          className="w3-container w3-card-4 w3-padding-16 w3-white"
          action="/action_page.php"
          target="_blank"
        >
          <div className="w3-section">
            <label>Name</label>
            <input className="w3-input" type="text" name="Name" required="" />
          </div>
          <div className="w3-section">
            <label>Email</label>
            <input className="w3-input" type="text" name="Email" required="" />
          </div>
          <div className="w3-section">
            <label>Message</label>
            <input
              className="w3-input"
              type="text"
              name="Message"
              required=""
            />
          </div>
          <input
            className="w3-check"
            type="checkbox"
            defaultChecked=""
            name="Like"
          />
          <label>I Like it!</label>
          <button type="submit" className="w3-button w3-right w3-theme">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
    </section>
  )
}

export default Contact