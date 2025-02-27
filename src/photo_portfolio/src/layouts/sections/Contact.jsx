import React from 'react';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
 
    <div
      className="w3-light-grey w3-padding-large w3-padding-32 w3-margin-top"
      id="contact"
    >
      <h3 className="w3-center">Contact</h3>
      <hr />
      <p>
        Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed
        mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
        accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam
        corper. Praesent tincidunt sed tellus.
      </p>
      <ContactForm />
    
      <br />
      <p>
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          target="_blank"
          className="w3-hover-text-green"
        >
          w3.css
        </a>
      </p>
    </div>
      

  );
}

export default Contact;
