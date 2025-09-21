import React from 'react'

const ContactForm = () => {
  return (
    <form className="w3-container" action="/action_page.php" target="_blank">
      <div className="w3-section">
        <label>Name</label>
        <input
          className="w3-input w3-border w3-hover-border-black"
          style={{ width: "100%" }}
          type="text"
          name="Name"
          required=""
        />
      </div>
      <div className="w3-section">
        <label>Email</label>
        <input
          className="w3-input w3-border w3-hover-border-black"
          style={{ width: "100%" }}
          type="text"
          name="Email"
          required=""
        />
      </div>
      <div className="w3-section">
        <label>Subject</label>
        <input
          className="w3-input w3-border w3-hover-border-black"
          style={{ width: "100%" }}
          name="Subject"
          required=""
        />
      </div>
      <div className="w3-section">
        <label>Message</label>
        <input
          className="w3-input w3-border w3-hover-border-black"
          style={{ width: "100%" }}
          name="Message"
          required=""
        />
      </div>
      <button type="submit" className="w3-button w3-block w3-black">
        Send
      </button>
    </form>
  )
}

export default ContactForm