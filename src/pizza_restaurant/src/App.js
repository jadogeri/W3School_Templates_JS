import './App.css';

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Amatic+SC"
  />

  {/* Navbar (sit on top) */}
  <div className="w3-top w3-hide-small">
    <div
      className="w3-bar w3-xlarge w3-black w3-opacity w3-hover-opacity-off"
      id="myNavbar"
    >
      <a href="#" className="w3-bar-item w3-button">
        HOME
      </a>
      <a href="#menu" className="w3-bar-item w3-button">
        MENU
      </a>
      <a href="#about" className="w3-bar-item w3-button">
        ABOUT
      </a>
      <a href="#myMap" className="w3-bar-item w3-button">
        CONTACT
      </a>
    </div>
  </div>
  {/* Header with image */}
  <header className="bgimg w3-display-container w3-grayscale-min" id="home">
    <div className="w3-display-bottomleft w3-padding">
      <span className="w3-tag w3-xlarge">Open from 10am to 12pm</span>
    </div>
    <div className="w3-display-middle w3-center">
      <span className="w3-text-white w3-hide-small" style={{ fontSize: 100 }}>
        thin
        <br />
        CRUST PIZZA
      </span>
      <span
        className="w3-text-white w3-hide-large w3-hide-medium"
        style={{ fontSize: 60 }}
      >
        <b>
          thin
          <br />
          CRUST PIZZA
        </b>
      </span>
      <p>
        <a href="#menu" className="w3-button w3-xxlarge w3-black">
          Let me see the menu
        </a>
      </p>
    </div>
  </header>
  {/* Menu Container */}
  <div className="w3-container w3-black w3-padding-64 w3-xxlarge" id="menu">
    <div className="w3-content">
      <h1 className="w3-center w3-jumbo" style={{ marginBottom: 64 }}>
        THE MENU
      </h1>
      <div className="w3-row w3-center w3-border w3-border-dark-grey">
        <a
          href="javascript:void(0)"
          onclick="openMenu(event, 'Pizza');"
          id="myLink"
        >
          <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
            Pizza
          </div>
        </a>
        <a href="javascript:void(0)" onclick="openMenu(event, 'Pasta');">
          <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
            Salads
          </div>
        </a>
        <a href="javascript:void(0)" onclick="openMenu(event, 'Starter');">
          <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
            Starter
          </div>
        </a>
      </div>
      <div id="Pizza" className="w3-container menu w3-padding-32 w3-white">
        <h1>
          <b>Margherita</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$12.50</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, fresh mozzarella, fresh basil
        </p>
        <hr />
        <h1>
          <b>Formaggio</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$15.50</span>
        </h1>
        <p className="w3-text-grey">
          Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)
        </p>
        <hr />
        <h1>
          <b>Chicken</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$17.00</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, mozzarella, chicken, onions
        </p>
        <hr />
        <h1>
          <b>Pineapple'o'clock</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$16.50</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil
        </p>
        <hr />
        <h1>
          <b>Meat Town</b> <span className="w3-tag w3-red w3-round">Hot!</span>
          <span className="w3-right w3-tag w3-dark-grey w3-round">$20.00</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken
        </p>
        <hr />
        <h1>
          <b>Parma</b> <span className="w3-tag w3-grey w3-round">New</span>
          <span className="w3-right w3-tag w3-dark-grey w3-round">$21.50</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, mozzarella, parma, bacon, fresh arugula
        </p>
      </div>
      <div id="Pasta" className="w3-container menu w3-padding-32 w3-white">
        <h1>
          <b>Lasagna</b>{" "}
          <span className="w3-tag w3-grey w3-round">Popular</span>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$13.50</span>
        </h1>
        <p className="w3-text-grey">
          Special sauce, mozzarella, parmesan, ground beef
        </p>
        <hr />
        <h1>
          <b>Ravioli</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$14.50</span>
        </h1>
        <p className="w3-text-grey">Ravioli filled with cheese</p>
        <hr />
        <h1>
          <b>Spaghetti Classica</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$11.00</span>
        </h1>
        <p className="w3-text-grey">Fresh tomatoes, onions, ground beef</p>
        <hr />
        <h1>
          <b>Seafood pasta</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$25.50</span>
        </h1>
        <p className="w3-text-grey">Salmon, shrimp, lobster, garlic</p>
      </div>
      <div id="Starter" className="w3-container menu w3-padding-32 w3-white">
        <h1>
          <b>Today's Soup</b>{" "}
          <span className="w3-tag w3-grey w3-round">Seasonal</span>
          <span className="w3-right w3-tag w3-dark-grey w3-round">$5.50</span>
        </h1>
        <p className="w3-text-grey">Ask the waiter</p>
        <hr />
        <h1>
          <b>Bruschetta</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$8.50</span>
        </h1>
        <p className="w3-text-grey">
          Bread with pesto, tomatoes, onion, garlic
        </p>
        <hr />
        <h1>
          <b>Garlic bread</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$9.50</span>
        </h1>
        <p className="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
        <hr />
        <h1>
          <b>Tomozzarella</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$10.50</span>
        </h1>
        <p className="w3-text-grey">Tomatoes and mozzarella</p>
      </div>
      <br />
    </div>
  </div>
  {/* About Container */}
  <div
    className="w3-container w3-padding-64 w3-red w3-grayscale w3-xlarge"
    id="about"
  >
    <div className="w3-content">
      <h1 className="w3-center w3-jumbo" style={{ marginBottom: 64 }}>
        About
      </h1>
      <p>
        The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <p>
        <strong>The Chef?</strong> Mr. Italiano himself
        <img
          src="https://www.w3schools.com/w3images/chef.jpg"
          style={{ width: 150 }}
          className="w3-circle w3-right"
          alt="Chef"
        />
      </p>
      <p>We are proud of our interiors.</p>
      <img
        src="https://www.w3schools.com/w3images/onepage_restaurant.jpg"
        style={{ width: "100%" }}
        className="w3-margin-top w3-margin-bottom"
        alt="Restaurant"
      />
      <h1>
        <b>Opening Hours</b>
      </h1>
      <div className="w3-row">
        <div className="w3-col s6">
          <p>Mon &amp; Tue CLOSED</p>
          <p>Wednesday 10.00 - 24.00</p>
          <p>Thursday 10:00 - 24:00</p>
        </div>
        <div className="w3-col s6">
          <p>Friday 10:00 - 12:00</p>
          <p>Saturday 10:00 - 23:00</p>
          <p>Sunday Closed</p>
        </div>
      </div>
    </div>
  </div>
  {/* Image of location/map */}
  <img
    src="https://www.w3schools.com/w3images/map.jpg"
    className="w3-image w3-greyscale"
    style={{ width: "100%" }}
    id="myMap"
  />
  {/* Contact */}
  <div className="w3-container w3-padding-64 w3-blue-grey w3-grayscale-min w3-xlarge">
    <div className="w3-content">
      <h1 className="w3-center w3-jumbo" style={{ marginBottom: 64 }}>
        Contact
      </h1>
      <p>Find us at some address at some place or call us at 05050515-122330</p>
      <p>
        <span className="w3-tag">FYI!</span> We offer full-service catering for
        any event, large or small. We understand your needs and we will cater
        the food to satisfy the biggerst criteria of them all, both look and
        taste.
      </p>
      <p className="w3-xxlarge">
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
          <button className="w3-button w3-light-grey w3-block" type="submit">
            SEND MESSAGE
          </button>
        </p>
      </form>
    </div>
  </div>
  {/* Footer */}
  <footer className="w3-center w3-black w3-padding-48 w3-xxlarge">
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
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
