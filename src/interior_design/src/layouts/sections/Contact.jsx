import React from 'react'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  return (
    <section>
           <div className="w3-container" id="contact" style={{ marginTop: 75 }}>
      <h1 className="w3-xxxlarge w3-text-red">
        <b>Contact.</b>
      </h1>
      <hr style={{ width: 50, border: "5px solid red" }} className="w3-round" />
      <p>
        Do you want us to style your home? Fill out the form and fill me in with
        the details :) We love meeting new people!
      </p>
      <ContactForm />

    </div>
    </section>
  )
}

export default Contact