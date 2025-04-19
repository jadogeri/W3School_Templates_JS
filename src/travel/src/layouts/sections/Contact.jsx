import React from 'react'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <div className="w3-container">
      <h2>Contact</h2>
      <p>Let us book your next trip!</p>
      <i className="fa fa-map-marker" style={{ width: 30 }} /> Chicago, US
      <br />
      <i className="fa fa-phone" style={{ width: 30 }} /> Phone: +00 151515
      <br />
      <i className="fa fa-envelope" style={{ width: 30 }}>
        {" "}
      </i>{" "}
      Email: mail@mail.com
      <br />
      <ContactForm />

    </div>
  )
}

export default Contact