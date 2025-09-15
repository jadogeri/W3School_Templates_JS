import './App.css';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="w3-content" style={{maxWidth:"80%"}}>
      <>
  <div className="w3-panel">
    <i className="w3-xlarge fa fa-bars" />
  </div>
  {/* First Grid: Logo & About */}
  <div className="w3-row">
    <div className="w3-half w3-container">
      <h1 className="w3-xxlarge w3-text-light-grey">Hello</h1>
      <h1 className="w3-xxlarge w3-text-grey">We are</h1>
      <h1 className="w3-jumbo">InShock</h1>
    </div>
    <div className="w3-half w3-container w3-xlarge w3-text-grey">
      <p className="">
        We build design teams - we break things down and build it better - we
        deliver the best of solutions
      </p>
      <p>InShock means powerfull simplicity</p>
    </div>
  </div>
  {/* Second Grid: Resent */}
  <div className="w3-panel w3-text-grey">
    <h4>MOST RECENT WORK:</h4>
  </div>
  <div className="w3-row">
    <div className="w3-half w3-container">
      <img src="https://www.w3schools.com/w3images/house1.jpg" style={{ width: "100%" }} />
    </div>
    <div className="w3-half w3-container">
      <img src="https://www.w3schools.com/w3images/house_arch.jpg" style={{ width: "100%" }} />
      <p className="w3-xlarge w3-text-grey">
        Demos, Logos, Reports, Names, Events, Media, Wordpress, Google, Books,
        Optimisations
      </p>
    </div>
  </div>
  {/* Footer */}
  <div className="w3-row w3-section">
    <div
      className="w3-third w3-container w3-black w3-large"
      style={{ height: 250 }}
    >
      <h2>Contact Info</h2>
      <p>
        <i className="fa fa-map-marker" style={{ width: 30 }} /> Chicago, US
      </p>
      <p>
        <i className="fa fa-phone" style={{ width: 30 }} /> Phone: +00 151515
      </p>
      <p>
        <i className="fa fa-envelope" style={{ width: 30 }}>
          {" "}
        </i>{" "}
        Email: mail@mail.com
      </p>
    </div>
    <div
      className="w3-third w3-center w3-large w3-dark-grey w3-text-white"
      style={{ height: 250 }}
    >
      <h2>Contact Us</h2>
      <p>If you have an idea.</p>
      <p>What are you waiting for?</p>
    </div>
    <div
      className="w3-third w3-center w3-large w3-grey w3-text-white"
      style={{ height: 250 }}
    >
      <h2>Like Us</h2>
      <i className="w3-xlarge fa fa-facebook-official" />
      <br />
      <i className="w3-xlarge fa fa-pinterest-p" />
      <br />
      <i className="w3-xlarge fa fa-twitter" />
      <br />
      <i className="w3-xlarge fa fa-flickr" />
      <br />
      <i className="w3-xlarge fa fa-linkedin" />
    </div>
  </div>
  <Footer />

</>


    </div>
  );
}

export default App;
