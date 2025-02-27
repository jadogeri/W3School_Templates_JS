import './App.css';

function App() {
  return (
<>
  {/* !PAGE CONTENT! */}
  <div className="w3-content" style={{ maxWidth: 1500 }}>
    {/* Header */}
    <header
      className="w3-panel w3-center w3-opacity"
      style={{ padding: "128px 16px" }}
    >
      <h1 className="w3-xlarge">PHOTOGRAPHER</h1>
      <h1>John Doe</h1>
      <div className="w3-padding-32">
        <div className="w3-bar w3-border">
          <a href="#" className="w3-bar-item w3-button">
            Home
          </a>
          <a href="#" className="w3-bar-item w3-button w3-light-grey">
            Portfolio
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Contact
          </a>
          <a href="#" className="w3-bar-item w3-button w3-hide-small">
            Weddings
          </a>
        </div>
      </div>
    </header>
    {/* Photo Grid */}
    <div className="w3-row-padding w3-grayscale" style={{ marginBottom: 128 }}>
      <div className="w3-half">
        <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/falls2.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/paris.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/mist.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/paris.jpg" style={{ width: "100%" }} />
      </div>
      <div className="w3-half">
        <img src="https://www.w3schools.com/w3images/underwater.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/ocean.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/wedding.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/mountainskies.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/rocks.jpg" style={{ width: "100%" }} />
        <img src="https://www.w3schools.com/w3images/underwater.jpg" style={{ width: "100%" }} />
      </div>
    </div>
    {/* End Page Content */}
  </div>
  {/* Footer */}
  <footer className="w3-container w3-padding-64 w3-light-grey w3-center w3-large">
    <i className="fa fa-facebook-official w3-hover-opacity" />
    <i className="fa fa-instagram w3-hover-opacity" />
    <i className="fa fa-snapchat w3-hover-opacity" />
    <i className="fa fa-pinterest-p w3-hover-opacity" />
    <i className="fa fa-twitter w3-hover-opacity" />
    <i className="fa fa-linkedin w3-hover-opacity" />
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
</>

  );
}

export default App;
