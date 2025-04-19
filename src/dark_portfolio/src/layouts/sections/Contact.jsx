import React from 'react'
import ContactForm from  "../../components/ContactForm"


const Contact = () => {
  return (
    <section>
            <div className="w3-padding-64 w3-content w3-text-grey" id="contact">
      <h2 className="w3-text-light-grey">Contact Me</h2>
      <hr style={{ width: 200 }} className="w3-opacity" />
      <div className="w3-section">
        <p>
          <i className="fa fa-map-marker fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
          Chicago, US
        </p>
        <p>
          <i className="fa fa-phone fa-fw w3-text-white w3-xxlarge w3-margin-right" />{" "}
          Phone: +00 151515
        </p>
        <p>
          <i className="fa fa-envelope fa-fw w3-text-white w3-xxlarge w3-margin-right">
            {" "}
          </i>{" "}
          Email: mail@mail.com
        </p>
      </div>
      <br />
      <p>Let's get in touch. Send me a message:</p>
      <ContactForm />

      {/* End Contact Section */}
    </div>
    </section>
  )
}

export default Contact