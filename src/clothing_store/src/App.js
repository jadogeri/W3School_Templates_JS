import logo from './logo.svg';
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
      href="https://fonts.googleapis.com/css?family=Roboto"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Montserrat"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n.w3-sidebar a {font-family: "Roboto", sans-serif}\nbody,h1,h2,h3,h4,h5,h6,.w3-wide {font-family: "Montserrat", sans-serif;}\n'
      }}
    />
    {/* Sidebar/menu */}
    <nav
      className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top"
      style={{ zIndex: 3, width: 250 }}
      id="mySidebar"
    >
      <div className="w3-container w3-display-container w3-padding-16">
        <i
          onclick="w3_close()"
          className="fa fa-remove w3-hide-large w3-button w3-display-topright"
        />
        <h3 className="w3-wide">
          <b>LOGO</b>
        </h3>
      </div>
      <div
        className="w3-padding-64 w3-large w3-text-grey"
        style={{ fontWeight: "bold" }}
      >
        <a href="#" className="w3-bar-item w3-button">
          Shirts
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Dresses
        </a>
        <a
          onclick="myAccFunc()"
          href="javascript:void(0)"
          className="w3-button w3-block w3-white w3-left-align"
          id="myBtn"
        >
          Jeans <i className="fa fa-caret-down" />
        </a>
        <div
          id="demoAcc"
          className="w3-bar-block w3-hide w3-padding-large w3-medium"
        >
          <a href="#" className="w3-bar-item w3-button w3-light-grey">
            <i className="fa fa-caret-right w3-margin-right" />
            Skinny
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Relaxed
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Bootcut
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Straight
          </a>
        </div>
        <a href="#" className="w3-bar-item w3-button">
          Jackets
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Gymwear
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Blazers
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Shoes
        </a>
      </div>
      <a href="#footer" className="w3-bar-item w3-button w3-padding">
        Contact
      </a>
      <a
        href="javascript:void(0)"
        className="w3-bar-item w3-button w3-padding"
        onclick="document.getElementById('newsletter').style.display='block'"
      >
        Newsletter
      </a>
      <a href="#footer" className="w3-bar-item w3-button w3-padding">
        Subscribe
      </a>
    </nav>
    {/* Top menu on small screens */}
    <header className="w3-bar w3-top w3-hide-large w3-black w3-xlarge">
      <div className="w3-bar-item w3-padding-24 w3-wide">LOGO</div>
      <a
        href="javascript:void(0)"
        className="w3-bar-item w3-button w3-padding-24 w3-right"
        onclick="w3_open()"
      >
        <i className="fa fa-bars" />
      </a>
    </header>
    {/* Overlay effect when opening sidebar on small screens */}
    <div
      className="w3-overlay w3-hide-large"
      onclick="w3_close()"
      style={{ cursor: "pointer" }}
      title="close side menu"
      id="myOverlay"
    />
    {/* !PAGE CONTENT! */}
    <div className="w3-main" style={{ marginLeft: 250 }}>
      {/* Push down content on small screens */}
      <div className="w3-hide-large" style={{ marginTop: 83 }} />
      {/* Top header */}
      <header className="w3-container w3-xlarge">
        <p className="w3-left">Jeans</p>
        <p className="w3-right">
          <i className="fa fa-shopping-cart w3-margin-right" />
          <i className="fa fa-search" />
        </p>
      </header>
      {/* Image header */}
      <div className="w3-display-container w3-container">
        <img src="/w3images/jeans.jpg" alt="Jeans" style={{ width: "100%" }} />
        <div
          className="w3-display-topleft w3-text-white"
          style={{ padding: "24px 48px" }}
        >
          <h1 className="w3-jumbo w3-hide-small">New arrivals</h1>
          <h1 className="w3-hide-large w3-hide-medium">New arrivals</h1>
          <h1 className="w3-hide-small">COLLECTION 2016</h1>
          <p>
            <a
              href="#jeans"
              className="w3-button w3-black w3-padding-large w3-large"
            >
              SHOP NOW
            </a>
          </p>
        </div>
      </div>
      <div className="w3-container w3-text-grey" id="jeans">
        <p>8 items</p>
      </div>
      {/* Product grid */}
      <div className="w3-row w3-grayscale">
        <div className="w3-col l3 s6">
          <div className="w3-container">
            <img src="/w3images/jeans1.jpg" style={{ width: "100%" }} />
            <p>
              Ripped Skinny Jeans
              <br />
              <b>$24.99</b>
            </p>
          </div>
          <div className="w3-container">
            <img src="/w3images/jeans2.jpg" style={{ width: "100%" }} />
            <p>
              Mega Ripped Jeans
              <br />
              <b>$19.99</b>
            </p>
          </div>
        </div>
        <div className="w3-col l3 s6">
          <div className="w3-container">
            <div className="w3-display-container">
              <img src="/w3images/jeans2.jpg" style={{ width: "100%" }} />
              <span className="w3-tag w3-display-topleft">New</span>
              <div className="w3-display-middle w3-display-hover">
                <button className="w3-button w3-black">
                  Buy now <i className="fa fa-shopping-cart" />
                </button>
              </div>
            </div>
            <p>
              Mega Ripped Jeans
              <br />
              <b>$19.99</b>
            </p>
          </div>
          <div className="w3-container">
            <img src="/w3images/jeans3.jpg" style={{ width: "100%" }} />
            <p>
              Washed Skinny Jeans
              <br />
              <b>$20.50</b>
            </p>
          </div>
        </div>
        <div className="w3-col l3 s6">
          <div className="w3-container">
            <img src="/w3images/jeans3.jpg" style={{ width: "100%" }} />
            <p>
              Washed Skinny Jeans
              <br />
              <b>$20.50</b>
            </p>
          </div>
          <div className="w3-container">
            <div className="w3-display-container">
              <img src="/w3images/jeans4.jpg" style={{ width: "100%" }} />
              <span className="w3-tag w3-display-topleft">Sale</span>
              <div className="w3-display-middle w3-display-hover">
                <button className="w3-button w3-black">
                  Buy now <i className="fa fa-shopping-cart" />
                </button>
              </div>
            </div>
            <p>
              Vintage Skinny Jeans
              <br />
              <b className="w3-text-red">$14.99</b>
            </p>
          </div>
        </div>
        <div className="w3-col l3 s6">
          <div className="w3-container">
            <img src="/w3images/jeans4.jpg" style={{ width: "100%" }} />
            <p>
              Vintage Skinny Jeans
              <br />
              <b>$14.99</b>
            </p>
          </div>
          <div className="w3-container">
            <img src="/w3images/jeans1.jpg" style={{ width: "100%" }} />
            <p>
              Ripped Skinny Jeans
              <br />
              <b>$24.99</b>
            </p>
          </div>
        </div>
      </div>
      {/* Subscribe section */}
      <div className="w3-container w3-black w3-padding-32">
        <h1>Subscribe</h1>
        <p>To get special offers and VIP treatment:</p>
        <p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Enter e-mail"
            style={{ width: "100%" }}
          />
        </p>
        <button type="button" className="w3-button w3-red w3-margin-bottom">
          Subscribe
        </button>
      </div>
      {/* Footer */}
      <footer
        className="w3-padding-64 w3-light-grey w3-small w3-center"
        id="footer"
      >
        <div className="w3-row-padding">
          <div className="w3-col s4">
            <h4>Contact</h4>
            <p>Questions? Go ahead.</p>
            <form action="/action_page.php" target="_blank">
              <p>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  name="Name"
                  required=""
                />
              </p>
              <p>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Email"
                  name="Email"
                  required=""
                />
              </p>
              <p>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Subject"
                  name="Subject"
                  required=""
                />
              </p>
              <p>
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Message"
                  name="Message"
                  required=""
                />
              </p>
              <button type="submit" className="w3-button w3-block w3-black">
                Send
              </button>
            </form>
          </div>
          <div className="w3-col s4">
            <h4>About</h4>
            <p>
              <a href="#">About us</a>
            </p>
            <p>
              <a href="#">We're hiring</a>
            </p>
            <p>
              <a href="#">Support</a>
            </p>
            <p>
              <a href="#">Find store</a>
            </p>
            <p>
              <a href="#">Shipment</a>
            </p>
            <p>
              <a href="#">Payment</a>
            </p>
            <p>
              <a href="#">Gift card</a>
            </p>
            <p>
              <a href="#">Return</a>
            </p>
            <p>
              <a href="#">Help</a>
            </p>
          </div>
          <div className="w3-col s4 w3-justify">
            <h4>Store</h4>
            <p>
              <i className="fa fa-fw fa-map-marker" /> Company Name
            </p>
            <p>
              <i className="fa fa-fw fa-phone" /> 0044123123
            </p>
            <p>
              <i className="fa fa-fw fa-envelope" /> ex@mail.com
            </p>
            <h4>We accept</h4>
            <p>
              <i className="fa fa-fw fa-cc-amex" /> Amex
            </p>
            <p>
              <i className="fa fa-fw fa-credit-card" /> Credit Card
            </p>
            <br />
            <i className="fa fa-facebook-official w3-hover-opacity w3-large" />
            <i className="fa fa-instagram w3-hover-opacity w3-large" />
            <i className="fa fa-snapchat w3-hover-opacity w3-large" />
            <i className="fa fa-pinterest-p w3-hover-opacity w3-large" />
            <i className="fa fa-twitter w3-hover-opacity w3-large" />
            <i className="fa fa-linkedin w3-hover-opacity w3-large" />
          </div>
        </div>
      </footer>
      <div className="w3-black w3-center w3-padding-24">
        Powered by{" "}
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          className="w3-hover-opacity"
        >
          w3.css
        </a>
      </div>
      {/* End page content */}
    </div>
    {/* Newsletter Modal */}
    <div id="newsletter" className="w3-modal">
      <div className="w3-modal-content w3-animate-zoom" style={{ padding: 32 }}>
        <div className="w3-container w3-white w3-center">
          <i
            onclick="document.getElementById('newsletter').style.display='none'"
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
            onclick="document.getElementById('newsletter').style.display='none'"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default App;
