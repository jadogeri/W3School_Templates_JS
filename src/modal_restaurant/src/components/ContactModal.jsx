import React from 'react'

const ContactModal = () => {
  return (
    <div id="contact" className="w3-modal">
      <div className="w3-modal-content w3-animate-zoom">
        <div className="w3-container w3-black">
          <span
            onClick={()=>{document.getElementById("contact").style.display='none'}}
            className="w3-button w3-display-topright w3-large"
          >
            x
          </span>
          <h1>Contact</h1>
        </div>
        <div className="w3-container">
          <p>
            Reserve a table, ask for today's special or just send us a message:
          </p>
          <form action="/action_page.php" target="_blank">
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Name"
                required=""
                name="Name"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="number"
                placeholder="How many people"
                required=""
                name="People"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="datetime-local"
                placeholder="Date and time"
                required=""
                name="date"
                defaultValue="2020-11-16T20:00"
              />
            </p>
            <p>
              <input
                className="w3-input w3-padding-16 w3-border"
                type="text"
                placeholder="Message \ Special requirements"
                required=""
                name="Message"
              />
            </p>
            <p>
              <button className="w3-button" type="submit">
                SEND MESSAGE
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactModal