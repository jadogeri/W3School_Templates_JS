import React from 'react'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <section>
          <div className="w3-container w3-padding-64 w3-theme-l5" id="contact">
    <div className="w3-row">
      <div className="w3-col m5">
        <div className="w3-padding-16">
          <span className="w3-xlarge w3-border-teal w3-bottombar">
            Contact Us
          </span>
        </div>
        <h3>Address</h3>
        <p>Swing by for a cup of coffee, or whatever.</p>
        <p>
          <i className="fa fa-map-marker w3-text-teal w3-xlarge" />
          &nbsp;&nbsp;Chicago, US
        </p>
        <p>
          <i className="fa fa-phone w3-text-teal w3-xlarge" />
          &nbsp;&nbsp;+00 1515151515
        </p>
        <p>
          <i className="fa fa-envelope-o w3-text-teal w3-xlarge" />
          &nbsp;&nbsp;test@test.com
        </p>
      </div>
      <div className="w3-col m7">
      <ContactForm />
      </div>
    </div>
  </div>
    </section>
  )
}

export default Contact