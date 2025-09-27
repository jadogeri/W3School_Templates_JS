import React from 'react'

const ContactForm = () => {
  return (
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
  )
}

export default ContactForm