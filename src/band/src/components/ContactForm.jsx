import React from 'react'

const ContactForm = () => {
  return (
          <form action="/action_page.php" target="_blank">
            <div
              className="w3-row-padding"
              style={{ margin: "0 -16px 8px -16px" }}
            >
              <div className="w3-half">
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  required=""
                  name="Name"
                />
              </div>
              <div className="w3-half">
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Email"
                  required=""
                  name="Email"
                />
              </div>
            </div>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Message"
              required=""
              name="Message"
            />
            <button
              className="w3-button w3-black w3-section w3-right"
              type="submit"
            >
              SEND
            </button>
          </form>
  )
}

export default ContactForm