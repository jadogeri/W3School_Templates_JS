import React from 'react';
import ContactForm from '../../components/ContactForm';

const Contact = () => {
  return (
    <section>
          <div className="w3-container" id="where" style={{ paddingBottom: 32 }}>
      <div className="w3-content" style={{ maxWidth: 700 }}>
        <h5 className="w3-center w3-padding-48">
          <span className="w3-tag w3-wide">WHERE TO FIND US</span>
        </h5>
        <p>Find us at some address at some place.</p>
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          className="w3-image"
          style={{ width: "100%" }}
        />
        <p>
          <span className="w3-tag">FYI!</span> We offer full-service catering
          for any event, large or small. We understand your needs and we will
          cater the food to satisfy the biggerst criteria of them all, both look
          and taste.
        </p>
        <p>
          <strong>Reserve</strong> a table, ask for today's special or just send
          us a message:
        </p>
        <ContactForm />
      </div>
    </div>
    </section>
  );
}

export default Contact;
