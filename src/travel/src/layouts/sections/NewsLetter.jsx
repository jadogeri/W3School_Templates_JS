import React from 'react'

const NewsLetter = () => {
  return (
    <div className="w3-container">
      <div className="w3-panel w3-padding-16 w3-black w3-opacity w3-card w3-hover-opacity-off">
        <h2>Get the best offers first!</h2>
        <p>Join our newsletter.</p>
        <label>E-mail</label>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="Your Email address"
        />
        <button type="button" className="w3-button w3-red w3-margin-top">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default NewsLetter