import React from 'react';
import InputField from './InputField';

const ContactForm = () => {
  return (
    <form action="/action_page.php" target="_blank">
        <InputField
            label="Name" name="Name"
        />
        <InputField
            label="Email" name="Email"
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
