import './App.css';
import Accordion from './components/Accordion';
import AlertBox from './components/AlertBox';
import AppBar from './layouts/AppBar';
import Footer from './layouts/Footer';
import Interests from './layouts/sections/Interests';
import Profile from './layouts/sections/Profile';
import NavBar from './layouts/NavBar';

function App() {
  return (
<>
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css"/>

  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/* Navbar */}

  <NavBar />

  {/* Navbar on small screens */}

  <AppBar />
 
  {/* Page Container */}
  <div
    className="w3-container w3-content"
    style={{ maxWidth: 1400, marginTop: 80 }}
  >
    {/* The Grid */}
    <div className="w3-row">
      {/* Left Column */}
      <div className="w3-col m3">
        {/* Profile */}

<Profile />
        <br />
        {/* Accordion */}

        <Accordion />

        <br />
        {/* Interests */}

      <Interests />
        <br />
        {/* Alert Box */}

        <AlertBox />

        {/* End Left Column */}
      </div>
      {/* Middle Column */}
      <div className="w3-col m7">
        <div className="w3-row-padding">
          <div className="w3-col m12">
            <div className="w3-card w3-round w3-white">
              <div className="w3-container w3-padding">
                <h6 className="w3-opacity">Social Media template by w3.css</h6>
                <p contentEditable="true" className="w3-border w3-padding">
                  Status: Feeling Blue
                </p>
                <button type="button" className="w3-button w3-theme">
                  <i className="fa fa-pencil" /> &nbsp;Post
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-container w3-card w3-white w3-round w3-margin">
          <br />
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: 60 }}
          />
          <span className="w3-right w3-opacity">1 min</span>
          <h4>John Doe</h4>
          <br />
          <hr className="w3-clear" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half">
              <img
                src="https://www.w3schools.com/w3images/lights.jpg"
                style={{ width: "100%" }}
                alt="Northern Lights"
                className="w3-margin-bottom"
              />
            </div>
            <div className="w3-half">
              <img
                src="https://www.w3schools.com/w3images/nature.jpg"
                style={{ width: "100%" }}
                alt="Nature"
                className="w3-margin-bottom"
              />
            </div>
          </div>
          <button
            type="button"
            className="w3-button w3-theme-d1 w3-margin-bottom"
          >
            <i className="fa fa-thumbs-up" /> &nbsp;Like
          </button>
          <button
            type="button"
            className="w3-button w3-theme-d2 w3-margin-bottom"
          >
            <i className="fa fa-comment" /> &nbsp;Comment
          </button>
        </div>
        <div className="w3-container w3-card w3-white w3-round w3-margin">
          <br />
          <img
            src="https://www.w3schools.com/w3images/avatar5.png"
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: 60 }}
          />
          <span className="w3-right w3-opacity">16 min</span>
          <h4>Jane Doe</h4>
          <br />
          <hr className="w3-clear" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button
            type="button"
            className="w3-button w3-theme-d1 w3-margin-bottom"
          >
            <i className="fa fa-thumbs-up" /> &nbsp;Like
          </button>
          <button
            type="button"
            className="w3-button w3-theme-d2 w3-margin-bottom"
          >
            <i className="fa fa-comment" /> &nbsp;Comment
          </button>
        </div>
        <div className="w3-container w3-card w3-white w3-round w3-margin">
          <br />
          <img
            src="https://www.w3schools.com/w3images/avatar6.png"
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: 60 }}
          />
          <span className="w3-right w3-opacity">32 min</span>
          <h4>Angie Jane</h4>
          <br />
          <hr className="w3-clear" />
          <p>Have you seen this?</p>
          <img
            src="https://www.w3schools.com/w3images/nature.jpg"
            style={{ width: "100%" }}
            className="w3-margin-bottom"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button
            type="button"
            className="w3-button w3-theme-d1 w3-margin-bottom"
          >
            <i className="fa fa-thumbs-up" /> &nbsp;Like
          </button>
          <button
            type="button"
            className="w3-button w3-theme-d2 w3-margin-bottom"
          >
            <i className="fa fa-comment" /> &nbsp;Comment
          </button>
        </div>
        {/* End Middle Column */}
      </div>
      {/* Right Column */}
      <div className="w3-col m2">
        <div className="w3-card w3-round w3-white w3-center">
          <div className="w3-container">
            <p>Upcoming Events:</p>
            <img
              src="https://www.w3schools.com/w3images/forest.jpg"
              alt="Forest"
              style={{ width: "100%" }}
            />
            <p>
              <strong>Holiday</strong>
            </p>
            <p>Friday 15:00</p>
            <p>
              <button className="w3-button w3-block w3-theme-l4">Info</button>
            </p>
          </div>
        </div>
        <br />
        <div className="w3-card w3-round w3-white w3-center">
          <div className="w3-container">
            <p>Friend Request</p>
            <img
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt="Avatar"
              style={{ width: "50%" }}
            />
            <br />
            <span>Jane Doe</span>
            <div className="w3-row w3-opacity">
              <div className="w3-half">
                <button
                  className="w3-button w3-block w3-green w3-section"
                  title="Accept"
                >
                  <i className="fa fa-check" />
                </button>
              </div>
              <div className="w3-half">
                <button
                  className="w3-button w3-block w3-red w3-section"
                  title="Decline"
                >
                  <i className="fa fa-remove" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="w3-card w3-round w3-white w3-padding-16 w3-center">
          <p>ADS</p>
        </div>
        <br />
        <div className="w3-card w3-round w3-white w3-padding-32 w3-center">
          <p>
            <i className="fa fa-bug w3-xxlarge" />
          </p>
        </div>
        {/* End Right Column */}
      </div>
      {/* End Grid */}
    </div>
    {/* End Page Container */}
  </div>
  <br />
  {/* Footer */}

<Footer />
</>

  );
}

export default App;
