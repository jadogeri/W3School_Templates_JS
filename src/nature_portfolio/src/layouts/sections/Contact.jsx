import React from 'react'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <section>
            <div className="w3-container w3-padding-large w3-grey">
      <h4 id="contact">
        <b>Contact Me</b>
      </h4>
      <div
        className="w3-row-padding w3-center w3-padding-24"
        style={{ margin: "0 -16px" }}
      >
        <div className="w3-third w3-dark-grey">
          <p>
            <i className="fa fa-envelope w3-xxlarge w3-text-light-grey" />
          </p>
          <p>email@email.com</p>
        </div>
        <div className="w3-third w3-teal">
          <p>
            <i className="fa fa-map-marker w3-xxlarge w3-text-light-grey" />
          </p>
          <p>Chicago, US</p>
        </div>
        <div className="w3-third w3-dark-grey">
          <p>
            <i className="fa fa-phone w3-xxlarge w3-text-light-grey" />
          </p>
          <p>512312311</p>
        </div>
      </div>
      <hr className="w3-opacity" />
      <ContactForm />

    </div>
    </section>
  )
}

export default Contact