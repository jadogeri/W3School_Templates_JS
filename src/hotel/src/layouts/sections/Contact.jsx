import React from 'react'
import ContactForm from '../../components/forms/ContactForm'

const Contact = () => {
  return (
    <section>
            <div className="w3-container" id="contact">
      <h2>Contact</h2>
      <p>If you have any questions, do not hesitate to ask them.</p>
      <i className="fa fa-map-marker w3-text-red" style={{ width: 30 }} />{" "}
      Chicago, US
      <br />
      <i className="fa fa-phone w3-text-red" style={{ width: 30 }} /> Phone: +00
      151515
      <br />
      <i className="fa fa-envelope w3-text-red" style={{ width: 30 }}>
        {" "}
      </i>{" "}
      Email: mail@mail.com
      <br />

      <ContactForm />
 
    </div>
    </section>
  )
}

export default Contact