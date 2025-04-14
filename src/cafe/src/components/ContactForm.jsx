import React from 'react';

const ContactForm = () => {
  return (
    <form action="/action_page.php" target="_blank">
    <p>
      <input
        className="w3-input w3-padding-16 w3-border"
        type="text"
        placeholder="Name"
        required=""
        name="Name"
      />
    </p>
    <p>
      <input
        className="w3-input w3-padding-16 w3-border"
        type="number"
        placeholder="How many people"
        required=""
        name="People"
      />
    </p>
    <p>
      <input
        className="w3-input w3-padding-16 w3-border"
        type="datetime-local"
        placeholder="Date and time"
        required=""
        name="date"
        defaultValue="2020-11-16T20:00"
      />
    </p>
    <p>
      <input
        className="w3-input w3-padding-16 w3-border"
        type="text"
        placeholder="Message \ Special requirements"
        required=""
        name="Message"
      />
    </p>
    <p>
      <button className="w3-button w3-black" type="submit">
        SEND MESSAGE
      </button>
    </p>
  </form>
  );
}

export default ContactForm;
