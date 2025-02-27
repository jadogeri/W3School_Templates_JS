import React from 'react';
import InputField from './InputField';

const ContactForm = () => {
  return (
    <form
      style={{ margin: "auto", width: "60%" }}
      action="/action_page.php"
      target="_blank"
    >
      <p>
        Just me, myself and I, exploring the universe of unknownment. I have a
        heart of love and an interest of lorem ipsum and mauris neque quam blog.
        I want to share my world with you. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla.
      </p>
      <p className="w3-large w3-text-pink">Do not hesitate to contact me!</p>
      <InputField 
        label="Name" type="text" name="Name"
        />      
      <InputField
        label="Email" type="text" name="Email"
        />
      <InputField
        label="Message" name="Message" 
        />
      
      <button type="submit" className="w3-button w3-block w3-dark-grey">
        Send
      </button>
    </form>
  );
}

export default ContactForm;
