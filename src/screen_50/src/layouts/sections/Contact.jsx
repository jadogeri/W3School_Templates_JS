import React from 'react'

const Contact = () => {
  return (
    <div className="w3-half w3-teal w3-container" style={{ height: 700 }}>
      <div className="w3-padding-64 w3-padding-large">
        <h1>Contact</h1>
        <p className="w3-opacity">GET IN TOUCH</p>
        <form
          className="w3-container w3-card w3-padding-32 w3-white"
          action="/action_page.php"
          target="_blank"
        >
          <div className="w3-section">
            <label>Name</label>
            <input
              className="w3-input"
              style={{ width: "100%" }}
              type="text"
              required=""
              name="Name"
            />
          </div>
          <div className="w3-section">
            <label>Email</label>
            <input
              className="w3-input"
              style={{ width: "100%" }}
              type="text"
              required=""
              name="Email"
            />
          </div>
          <div className="w3-section">
            <label>Message</label>
            <input
              className="w3-input"
              style={{ width: "100%" }}
              type="text"
              required=""
              name="Message"
            />
          </div>
          <button type="submit" className="w3-button w3-teal w3-right">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact