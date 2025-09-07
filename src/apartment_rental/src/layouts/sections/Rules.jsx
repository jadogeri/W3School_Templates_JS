import React from 'react'

const Rules = () => {
  return (
    <section>
            <h4>
        <strong>Rules</strong>
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>Subscribe to receive updates on available dates and special offers.</p>
      <p>
        <button
          className="w3-button w3-green w3-third"
          onClick={()=>{document.getElementById('subscribe').style.display='block'}}
        >
          Subscribe
        </button>
      </p>

    </section>
  )
}

export default Rules