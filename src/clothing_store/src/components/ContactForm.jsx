import React from 'react'

const ContactForm = () => {
  return (
    <form action="/action_page.php" target="_blank">
    <p>
      <input
        className="w3-input w3-border"
        type="text"
        placeholder="Name"
        name="Name"
        required=""
      />
    </p>
    <p>
      <input
        className="w3-input w3-border"
        type="text"
        placeholder="Email"
        name="Email"
        required=""
      />
    </p>
    <p>
      <input
        className="w3-input w3-border"
        type="text"
        placeholder="Subject"
        name="Subject"
        required=""
      />
    </p>
    <p>
      <input
        className="w3-input w3-border"
        type="text"
        placeholder="Message"
        name="Message"
        required=""
      />
    </p>
    <button type="submit" className="w3-button w3-block w3-black">
      Send
    </button>
  </form>
  )
}

export default ContactForm