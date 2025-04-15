import React from 'react'

const NewsLetterModal = () => {
  return (
    <div id="newsletter" className="w3-modal">
      <div className="w3-modal-content w3-animate-zoom" style={{ padding: 32 }}>
        <div className="w3-container w3-white w3-center">
          <i
            onClick={()=>{document.getElementById('newsletter').style.display='none'}}
            className="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"
          />
          <h2 className="w3-wide">NEWSLETTER</h2>
          <p>
            Join our mailing list to receive updates on new arrivals and special
            offers.
          </p>
          <p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Enter e-mail"
            />
          </p>
          <button
            type="button"
            className="w3-button w3-padding-large w3-red w3-margin-bottom"
            onClick={()=>{document.getElementById('newsletter').style.display='none'}}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetterModal