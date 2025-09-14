import React from 'react'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <section>
          <div
      className="w3-container w3-content w3-padding-64"
      style={{ maxWidth: 800 }}
      id="contact"
    >
      <h2 className="w3-wide w3-center">CONTACT</h2>
      <p className="w3-opacity w3-center">
        <i>Fan? Drop a note!</i>
      </p>
      <div className="w3-row w3-padding-32">
        <div className="w3-col m6 w3-large w3-margin-bottom">
          <i className="fa fa-map-marker" style={{ width: 30 }} /> Chicago, US
          <br />
          <i className="fa fa-phone" style={{ width: 30 }} /> Phone: +00 151515
          <br />
          <i className="fa fa-envelope" style={{ width: 30 }}>
            {" "}
          </i>{" "}
          Email: mail@mail.com
          <br />
        </div>
        <div className="w3-col m6">
          <ContactForm />

        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact