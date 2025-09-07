
const SubscribeModal = () => {
  return (
  <div id="subscribe" className="w3-modal">
    <div className="w3-modal-content w3-animate-zoom w3-padding-large">
      <div className="w3-container w3-white w3-center">
        <i
          onClick={()=>{document.getElementById('subscribe').style.display='none'}}
          className="fa fa-remove w3-button w3-xlarge w3-right w3-transparent"
        />
        <h2 className="w3-wide">SUBSCRIBE</h2>
        <p>
          Join our mailing list to receive updates on available dates and
          special offers.
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
          className="w3-button w3-padding-large w3-green w3-margin-bottom"
          onClick={()=>{document.getElementById('subscribe').style.display='none'}}
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
  )
}

export default SubscribeModal