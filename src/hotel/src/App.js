import './App.css';

function App() {
  return (
    <>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", Arial, Helvetica, sans-serif}\n'
    }}
  />
  {/* Navigation Bar */}
  <div className="w3-bar w3-white w3-large">
    <a href="#" className="w3-bar-item w3-button w3-red w3-mobile">
      <i className="fa fa-bed w3-margin-right" />
      Logo
    </a>
    <a href="#rooms" className="w3-bar-item w3-button w3-mobile">
      Rooms
    </a>
    <a href="#about" className="w3-bar-item w3-button w3-mobile">
      About
    </a>
    <a href="#contact" className="w3-bar-item w3-button w3-mobile">
      Contact
    </a>
    <a
      href="#contact"
      className="w3-bar-item w3-button w3-right w3-light-grey w3-mobile"
    >
      Book Now
    </a>
  </div>
  {/* Header */}
  <header
    className="w3-display-container w3-content"
    style={{ maxWidth: 1500 }}
  >
    <img
      className="w3-image"
      src="https://www.w3schools.com/w3images/hotel.jpg"
      alt="The Hotel"
      style={{ minWidth: 1000 }}
      width={1500}
      height={800}
    />
    <div className="w3-display-left w3-padding w3-col l6 m8">
      <div className="w3-container w3-red">
        <h2>
          <i className="fa fa-bed w3-margin-right" />
          Hotel Name
        </h2>
      </div>
      <div className="w3-container w3-white w3-padding-16">
        <form action="/action_page.php" target="_blank">
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half w3-margin-bottom">
              <label>
                <i className="fa fa-calendar-o" /> Check In
              </label>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="DD MM YYYY"
                name="CheckIn"
                required={false}
              />
            </div>
            <div className="w3-half">
              <label>
                <i className="fa fa-calendar-o" /> Check Out
              </label>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="DD MM YYYY"
                name="CheckOut"
                required={false}
              />
            </div>
          </div>
          <div className="w3-row-padding" style={{ margin: "8px -16px" }}>
            <div className="w3-half w3-margin-bottom">
              <label>
                <i className="fa fa-male" /> Adults
              </label>
              <input
                className="w3-input w3-border"
                type="number"
                defaultValue={1}
                name="Adults"
                min={1}
                max={6}
              />
            </div>
            <div className="w3-half">
              <label>
                <i className="fa fa-child" /> Kids
              </label>
              <input
                className="w3-input w3-border"
                type="number"
                defaultValue={0}
                name="Kids"
                min={0}
                max={6}
              />
            </div>
          </div>
          <button className="w3-button w3-dark-grey" type="submit">
            <i className="fa fa-search w3-margin-right" /> Search availability
          </button>
        </form>
      </div>
    </div>
  </header>
  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 1532 }}>
    <div className="w3-container w3-margin-top" id="rooms">
      <h3>Rooms</h3>
      <p>
        Make yourself at home is our slogan. We offer the best beds in the
        industry. Sleep well and rest well.
      </p>
    </div>
    <div className="w3-row-padding">
      <div className="w3-col m3">
        <label>
          <i className="fa fa-calendar-o" /> Check In
        </label>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="DD MM YYYY"
        />
      </div>
      <div className="w3-col m3">
        <label>
          <i className="fa fa-calendar-o" /> Check Out
        </label>
        <input
          className="w3-input w3-border"
          type="text"
          placeholder="DD MM YYYY"
        />
      </div>
      <div className="w3-col m2">
        <label>
          <i className="fa fa-male" /> Adults
        </label>
        <input className="w3-input w3-border" type="number" placeholder={"1"} />
      </div>
      <div className="w3-col m2">
        <label>
          <i className="fa fa-child" /> Kids
        </label>
        <input className="w3-input w3-border" type="number" placeholder={"0"} />
      </div>
      <div className="w3-col m2">
        <label>
          <i className="fa fa-search" /> Search
        </label>
        <button className="w3-button w3-block w3-black">Search</button>
      </div>
    </div>
    <div className="w3-row-padding w3-padding-16">
      <div className="w3-third w3-margin-bottom">
        <img
          src="https://www.w3schools.com/w3images/room_single.jpg"
          alt="Norway"
          style={{ width: "100%" }}
        />
        <div className="w3-container w3-white">
          <h3>Single Room</h3>
          <h6 className="w3-opacity">From $99</h6>
          <p>Single bed</p>
          <p>
            15m<sup>2</sup>
          </p>
          <p className="w3-large">
            <i className="fa fa-bath" /> <i className="fa fa-phone" />{" "}
            <i className="fa fa-wifi" />
          </p>
          <button className="w3-button w3-block w3-black w3-margin-bottom">
            Choose Room
          </button>
        </div>
      </div>
      <div className="w3-third w3-margin-bottom">
        <img
          src="https://www.w3schools.com/w3images/room_double.jpg"
          alt="Norway"
          style={{ width: "100%" }}
        />
        <div className="w3-container w3-white">
          <h3>Double Room</h3>
          <h6 className="w3-opacity">From $149</h6>
          <p>Queen-size bed</p>
          <p>
            25m<sup>2</sup>
          </p>
          <p className="w3-large">
            <i className="fa fa-bath" /> <i className="fa fa-phone" />{" "}
            <i className="fa fa-wifi" /> <i className="fa fa-tv" />
          </p>
          <button className="w3-button w3-block w3-black w3-margin-bottom">
            Choose Room
          </button>
        </div>
      </div>
      <div className="w3-third w3-margin-bottom">
        <img
          src="https://www.w3schools.com/w3images/room_deluxe.jpg"
          alt="Norway"
          style={{ width: "100%" }}
        />
        <div className="w3-container w3-white">
          <h3>Deluxe Room</h3>
          <h6 className="w3-opacity">From $199</h6>
          <p>King-size bed</p>
          <p>
            40m<sup>2</sup>
          </p>
          <p className="w3-large">
            <i className="fa fa-bath" /> <i className="fa fa-phone" />{" "}
            <i className="fa fa-wifi" /> <i className="fa fa-tv" />{" "}
            <i className="fa fa-glass" /> <i className="fa fa-cutlery" />
          </p>
          <button className="w3-button w3-block w3-black w3-margin-bottom">
            Choose Room
          </button>
        </div>
      </div>
    </div>
    <div className="w3-row-padding" id="about">
      <div className="w3-col l4 12">
        <h3>About</h3>
        <h6>
          Our hotel is one of a kind. It is truely amazing. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam.
        </h6>
        <p>
          We accept: <i className="fa fa-credit-card w3-large" />{" "}
          <i className="fa fa-cc-mastercard w3-large" />{" "}
          <i className="fa fa-cc-amex w3-large" />{" "}
          <i className="fa fa-cc-cc-visa w3-large" />
          <i className="fa fa-cc-paypal w3-large" />
        </p>
      </div>
      <div className="w3-col l8 12">
        {/* Image of location/map */}
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          className="w3-image w3-greyscale"
          style={{ width: "100%" }}
        />
      </div>
    </div>
    <div
      className="w3-row-padding w3-large w3-center"
      style={{ margin: "32px 0" }}
    >
      <div className="w3-third">
        <i className="fa fa-map-marker w3-text-red" /> 423 Some adr, Chicago, US
      </div>
      <div className="w3-third">
        <i className="fa fa-phone w3-text-red" /> Phone: +00 151515
      </div>
      <div className="w3-third">
        <i className="fa fa-envelope w3-text-red" /> Email: mail@mail.com
      </div>
    </div>
    <div className="w3-panel w3-red w3-leftbar w3-padding-32">
      <h6>
        <i className="fa fa-info w3-deep-orange w3-padding w3-margin-right" />{" "}
        On demand, we can offer playstation, babycall, children care, dog
        equipment, etc.
      </h6>
    </div>
    <div className="w3-container">
      <h3>Our Hotels</h3>
      <h6>You can find our hotels anywhere in the world:</h6>
    </div>
    <div className="w3-row-padding w3-padding-16 w3-text-white w3-large">
      <div className="w3-half w3-margin-bottom">
        <div className="w3-display-container">
          <img
            src="https://www.w3schools.com/w3images/cinqueterre.jpg"
            alt="Cinque Terre"
            style={{ width: "100%" }}
          />
          <span className="w3-display-bottomleft w3-padding">Cinque Terre</span>
        </div>
      </div>
      <div className="w3-half">
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-half w3-margin-bottom">
            <div className="w3-display-container">
              <img
                src="https://www.w3schools.com/w3images/newyork2.jpg"
                alt="New York"
                style={{ width: "100%" }}
              />
              <span className="w3-display-bottomleft w3-padding">New York</span>
            </div>
          </div>
          <div className="w3-half w3-margin-bottom">
            <div className="w3-display-container">
              <img
                src="https://www.w3schools.com/w3images/sanfran.jpg"
                alt="San Francisco"
                style={{ width: "100%" }}
              />
              <span className="w3-display-bottomleft w3-padding">
                San Francisco
              </span>
            </div>
          </div>
        </div>
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-half w3-margin-bottom">
            <div className="w3-display-container">
              <img
                src="https://www.w3schools.com/w3images/pisa.jpg"
                alt="Pisa"
                style={{ width: "100%" }}
              />
              <span className="w3-display-bottomleft w3-padding">Pisa</span>
            </div>
          </div>
          <div className="w3-half w3-margin-bottom">
            <div className="w3-display-container">
              <img
                src="https://www.w3schools.com/w3images/paris.jpg"
                alt="Paris"
                style={{ width: "100%" }}
              />
              <span className="w3-display-bottomleft w3-padding">Paris</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="w3-container w3-padding-32 w3-black w3-opacity w3-card w3-hover-opacity-off"
      style={{ margin: "32px 0" }}
    >
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
    <div className="w3-container" id="contact">
      <h2>Contact</h2>
      <p>If you have any questions, do not hesitate to ask them.</p>
      <i className="fa fa-map-marker w3-text-red" style={{ width: 30 }} />{" "}
      Chicago, US
      <br />
      <i className="fa fa-phone w3-text-red" style={{ width: 30 }} /> Phone: +00
      151515
      <br />
      <i className="fa fa-envelope w3-text-red" style={{ width: 30 }}>
        {" "}
      </i>{" "}
      Email: mail@mail.com
      <br />
      <form action="/action_page.php" target="_blank">
        <p>
          <input
            className="w3-input w3-padding-16 w3-border"
            type="text"
            placeholder="Name"
            required={false}
            name="Name"
          />
        </p>
        <p>
          <input
            className="w3-input w3-padding-16 w3-border"
            type="text"
            placeholder="Email"
            required={false}
            name="Email"
          />
        </p>
        <p>
          <input
            className="w3-input w3-padding-16 w3-border"
            type="text"
            placeholder="Message"
            required={false}
            name="Message"
          />
        </p>
        <p>
          <button className="w3-button w3-black w3-padding-large" type="submit">
            SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
    {/* End page content */}
  </div>
  {/* Footer */}
  <footer className="w3-padding-32 w3-black w3-center w3-margin-top">
    <h5>Find Us On</h5>
    <div className="w3-xlarge w3-padding-16">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
    </div>
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        target="_blank"
        className="w3-hover-text-green"
      >
        w3.css
      </a>
    </p>
  </footer>
  {/* Add Google Maps */}
  {/*
To use this code on your website, get a free API key from Google.
Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
*/}
</>

  );
}

export default App;
