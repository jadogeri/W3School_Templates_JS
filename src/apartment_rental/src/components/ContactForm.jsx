
const ContactForm = () => {
  return (
    <div className="w3-container" id="contact">
        <h2>Contact</h2>
        <i className="fa fa-map-marker" style={{ width: 30 }} /> Chicago, US
        <br />
        <i className="fa fa-phone" style={{ width: 30 }} /> Phone: +00 151515
        <br />
        <i className="fa fa-envelope" style={{ width: 30 }}>
            {" "}
        </i>{" "}
        Email: mail@mail.com
        <br />
        <p>Questions? Go ahead, ask them:</p>
        <form action="/action_page.php" target="_blank">
            <p>
            <input
                className="w3-input w3-border"
                type="text"
                placeholder="Name"
                required=""
                name="Name"
            />
            </p>
            <p>
            <input
                className="w3-input w3-border"
                type="text"
                placeholder="Email"
                required=""
                name="Email"
            />
            </p>
            <p>
            <input
                className="w3-input w3-border"
                type="text"
                placeholder="Message"
                required=""
                name="Message"
            />
            </p>
            <button type="submit" className="w3-button w3-green w3-third">
            Send a Message
            </button>
        </form>
    </div>
    
 )
}

export default ContactForm