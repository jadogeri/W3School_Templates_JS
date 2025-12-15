import React from 'react'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
<section>
      <div
    className="w3-container w3-light-grey"
    style={{ padding: "128px 16px" }}
    id="contact"
  >
    <h3 className="w3-center">CONTACT</h3>
    <p className="w3-center w3-large">Lets get in touch. Send us a message:</p>
    <div style={{ marginTop: 48 }}>
      <p>
        <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right" />{" "}
        Chicago, US
      </p>
      <p>
        <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right" /> Phone:
        +00 151515
      </p>
      <p>
        <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i>{" "}
        Email: mail@mail.com
      </p>
      <br />
      <ContactForm />

      {/* Image of location/map */}
      <img
        src="https://www.w3schools.com/w3images/map.jpg"
        className="w3-image w3-greyscale"
        style={{ width: "100%", marginTop: 48 }}
      />
    </div>
  </div>
</section>
  )
}

export default Contact