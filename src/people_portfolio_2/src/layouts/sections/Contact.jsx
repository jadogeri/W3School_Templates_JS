import React from 'react'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <section>
            <div
      className="w3-container w3-light-grey w3-padding-32 w3-padding-large"
      id="contact"
    >
      <div className="w3-content" style={{ maxWidth: 600 }}>
        <h4 className="w3-center">
          <b>Contact Me</b>
        </h4>
        <p>
          Do you want me to photograph you? Fill out the form and fill me in
          with the details :) I love meeting new people!
        </p>
        <ContactForm />

      </div>
    </div>
    </section>
  )
}

export default Contact