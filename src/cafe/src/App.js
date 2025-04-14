import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Menu from './layouts/sections/Menu';

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Inconsolata"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody, html {\n  height: 100%;\n  font-family: "Inconsolata", sans-serif;\n}\n\n.bgimg {\n  background-position: center;\n  background-size: cover;\n  background-image: url("https://www.w3schools.com/w3images/coffeehouse.jpg");\n  min-height: 75%;\n}\n\n.menu {\n  display: none;\n}\n'
    }}
  />
  {/* Links (sit on top) */}
  <div className="w3-top">
    <div className="w3-row w3-padding w3-black">
      <div className="w3-col s3">
        <a href="#" className="w3-button w3-block w3-black">
          HOME
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#about" className="w3-button w3-block w3-black">
          ABOUT
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#menu" className="w3-button w3-block w3-black">
          MENU
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#where" className="w3-button w3-block w3-black">
          WHERE
        </a>
      </div>
    </div>
  </div>
  {/* Header with image */}
  <Header />

  {/* Add a background color and large text to the whole page */}
  <div className="w3-sand w3-grayscale w3-large">
    {/* About Container */}
    <div className="w3-container" id="about">
      <div className="w3-content" style={{ maxWidth: 700 }}>
        <h5 className="w3-center w3-padding-64">
          <span className="w3-tag w3-wide">ABOUT THE CAFE</span>
        </h5>
        <p>
          The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          In addition to our full espresso and brew bar menu, we serve fresh
          made-to-order breakfast and lunch sandwiches, as well as a selection
          of sides and salads and other good stuff.
        </p>
        <div className="w3-panel w3-leftbar w3-light-grey">
          <p>
            <i>
              "Use products from nature for what it's worth - but never too
              early, nor too late." Fresh is the new sweet.
            </i>
          </p>
          <p>Chef, Coffeeist and Owner: Liam Brown</p>
        </div>
        <img
          src="https://www.w3schools.com/w3images/coffeeshop.jpg"
          style={{ width: "100%", maxWidth: 1000 }}
          className="w3-margin-top"
        />
        <p>
          <strong>Opening hours:</strong> everyday from 6am to 5pm.
        </p>
        <p>
          <strong>Address:</strong> 15 Adr street, 5015, NY
        </p>
      </div>
    </div>
    {/* Menu Container */}
    <Menu />

    {/* Contact/Area Container */}
    <div className="w3-container" id="where" style={{ paddingBottom: 32 }}>
      <div className="w3-content" style={{ maxWidth: 700 }}>
        <h5 className="w3-center w3-padding-48">
          <span className="w3-tag w3-wide">WHERE TO FIND US</span>
        </h5>
        <p>Find us at some address at some place.</p>
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          className="w3-image"
          style={{ width: "100%" }}
        />
        <p>
          <span className="w3-tag">FYI!</span> We offer full-service catering
          for any event, large or small. We understand your needs and we will
          cater the food to satisfy the biggerst criteria of them all, both look
          and taste.
        </p>
        <p>
          <strong>Reserve</strong> a table, ask for today's special or just send
          us a message:
        </p>
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Name"
              required=""
              name="Name"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="number"
              placeholder="How many people"
              required=""
              name="People"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="datetime-local"
              placeholder="Date and time"
              required=""
              name="date"
              defaultValue="2020-11-16T20:00"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16 w3-border"
              type="text"
              placeholder="Message \ Special requirements"
              required=""
              name="Message"
            />
          </p>
          <p>
            <button className="w3-button w3-black" type="submit">
              SEND MESSAGE
            </button>
          </p>
        </form>
      </div>
    </div>
    {/* End page content */}
  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
