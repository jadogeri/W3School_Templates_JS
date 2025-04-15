import ContactForm from './components/ContactForm';
import Footer from './layouts/Footer';
import AppHeader from './layouts/AppHeader';
import SideBar from './layouts/SideBar';
import { w3_close } from './utils/w3_close';
import Header from './layouts/Header';
import Subscribe from './layouts/sections/Subscribe';
import Products from './layouts/sections/Products';
import NewsLetterModal from './components/NewsLetterModal';

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
    <SideBar />
   
    {/* Top menu on small screens */}
    <AppHeader />

    {/* Overlay effect when opening sidebar on small screens */}
    <div
      className="w3-overlay w3-hide-large"
      onClick={()=>{w3_close()}}
      style={{ cursor: "pointer" }}
      title="close side menu"
      id="myOverlay"
    />
    {/* !PAGE CONTENT! */}
    <div className="w3-main" style={{ marginLeft: 250 }}>
      {/* Push down content on small screens */}
      <div className="w3-hide-large" style={{ marginTop: 83 }} />
      {/* Top header */}
      <Header />

      {/* Image header */}
      <div className="w3-display-container w3-container">
        <img src="https://www.w3schools.com/w3images/jeans.jpg" alt="Jeans" style={{ width: "100%" }} />
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
      <Products />

      {/* Subscribe section */}
      <Subscribe />

      {/* Footer */}
      <footer
        className="w3-padding-64 w3-light-grey w3-small w3-center"
        id="footer"
      >
        <div className="w3-row-padding">
          <div className="w3-col s4">
            <h4>Contact</h4>
            <p>Questions? Go ahead.</p>
            
            <ContactForm />

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

    <Footer />
      {/* End page content */}
    </div>
    {/* Newsletter Modal */}
    <NewsLetterModal />

  </>
  
  );
}

export default App;
