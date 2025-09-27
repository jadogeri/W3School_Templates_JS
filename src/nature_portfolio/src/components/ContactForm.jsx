import React from 'react'

const ContactForm = () => {
  return (
      <form action="/action_page.php" target="_blank">
        <div className="w3-section">
          <label>Name</label>
          <input
            className="w3-input w3-border"
            type="text"
            name="Name"
            required=""
          />
        </div>
        <div className="w3-section">
          <label>Email</label>
          <input
            className="w3-input w3-border"
            type="text"
            name="Email"
            required=""
          />
        </div>
        <div className="w3-section">
          <label>Message</label>
          <input
            className="w3-input w3-border"
            type="text"
            name="Message"
            required=""
          />
        </div>
        <button type="submit" className="w3-button w3-black w3-margin-bottom">
          <i className="fa fa-paper-plane w3-margin-right" />
          Send Message
        </button>
      </form>
  )
}

export default ContactForm