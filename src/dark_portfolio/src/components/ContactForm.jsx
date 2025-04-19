import React from 'react'

const ContactForm = () => {
  return (
    <form action="/action_page.php" target="_blank">
    <p>
      <input
        className="w3-input w3-padding-16"
        type="text"
        placeholder="Name"
        required=""
        name="Name"
      />
    </p>
    <p>
      <input
        className="w3-input w3-padding-16"
        type="text"
        placeholder="Email"
        required=""
        name="Email"
      />
    </p>
    <p>
      <input
        className="w3-input w3-padding-16"
        type="text"
        placeholder="Subject"
        required=""
        name="Subject"
      />
    </p>
    <p>
      <input
        className="w3-input w3-padding-16"
        type="text"
        placeholder="Message"
        required=""
        name="Message"
      />
    </p>
    <p>
      <button
        className="w3-button w3-light-grey w3-padding-large"
        type="submit"
      >
        <i className="fa fa-paper-plane" /> SEND MESSAGE
      </button>
    </p>
  </form>
  )
}

export default ContactForm