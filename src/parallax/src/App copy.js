import './App.css';
import { myFunction } from './utils/myFunction';
import Footer from './layouts/Footer';
import Contact from './layouts/sections/Contact';
import ImageModal from './components/ImageModal';
import ImageGrid from './components/ImageGrid';
import AppBar from './layouts/AppBar';
import NavBar from './layouts/NavBar';


function App() {


  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};

  return (
<>

  {/* Navbar (sit on top) */}
  <div className="w3-top">
    <NavBar />

    {/* Navbar on small screens */}
    <AppBar />
  
  </div>
  {/* First Parallax Image with Logo Text */}
  <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
    <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
      <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
        MY <span className="w3-hide-small">WEBSITE</span> LOGO
      </span>
    </div>
  </div>
  {/* Container (About Section) */}
  <div className="w3-content w3-container w3-padding-64" id="about">
    <h3 className="w3-center">ABOUT ME</h3>
    <p className="w3-center">
      <em>I love photography</em>
    </p>
    <p>
      We have created a fictional "personal" website/blog, and our fictional
      character is a hobby photographer. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </p>
    <div className="w3-row">
      <div className="w3-col m6 w3-center w3-padding-large">
        <p>
          <b>
            <i className="fa fa-user w3-margin-right" />
            My Name
          </b>
        </p>
        <br />
        <img
          src="https://www.w3schools.com/w3images/avatar_hat.jpg"
          className="w3-round w3-image w3-opacity w3-hover-opacity-off"
          alt="Photo of Me"
          width={500}
          height={333}
        />
      </div>
      {/* Hide this text on small devices */}
      <div className="w3-col m6 w3-hide-small w3-padding-large">
        <p>
          Welcome to my website. I am lorem ipsum consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <p className="w3-large w3-center w3-padding-16">Im really good at:</p>
    <p className="w3-wide">
      <i className="fa fa-camera" />
      Photography
    </p>
    <div className="w3-light-grey">
      <div
        className="w3-container w3-padding-small w3-dark-grey w3-center"
        style={{ width: "90%" }}
      >
        90%
      </div>
    </div>
    <p className="w3-wide">
      <i className="fa fa-laptop" />
      Web Design
    </p>
    <div className="w3-light-grey">
      <div
        className="w3-container w3-padding-small w3-dark-grey w3-center"
        style={{ width: "85%" }}
      >
        85%
      </div>
    </div>
    <p className="w3-wide">
      <i className="fa fa-photo" />
      Photoshop
    </p>
    <div className="w3-light-grey">
      <div
        className="w3-container w3-padding-small w3-dark-grey w3-center"
        style={{ width: "75%" }}
      >
        75%
      </div>
    </div>
  </div>
  <div className="w3-row w3-center w3-dark-grey w3-padding-16">
    <div className="w3-quarter w3-section">
      <span className="w3-xlarge">14+</span>
      <br />
      Partners
    </div>
    <div className="w3-quarter w3-section">
      <span className="w3-xlarge">55+</span>
      <br />
      Projects Done
    </div>
    <div className="w3-quarter w3-section">
      <span className="w3-xlarge">89+</span>
      <br />
      Happy Clients
    </div>
    <div className="w3-quarter w3-section">
      <span className="w3-xlarge">150+</span>
      <br />
      Meetings
    </div>
  </div>
  {/* Second Parallax Image with Portfolio Text */}
  <div className="bgimg-2 w3-display-container w3-opacity-min">
    <div className="w3-display-middle">
      <span className="w3-xxlarge w3-text-white w3-wide">PORTFOLIO</span>
    </div>
  </div>
  {/* Container (Portfolio Section) */}
  <div className="w3-content w3-container w3-padding-64" id="portfolio">
    <h3 className="w3-center">MY WORK</h3>
    <p className="w3-center">
      <em>
        Here are some of my latest lorem work ipsum tipsum.
        <br /> Click on the images to make them bigger
      </em>
    </p>
    <br />
    {/* Responsive Grid. Four columns on tablets, laptops and desktops. Will stack on mobile devices/small screens (100% width) */}

      <ImageGrid />

      <button
        className="w3-button w3-padding-large w3-light-grey"
        style={{ marginTop: 64 }}
      >
        LOAD MORE
      </button>
    </div>
  {/* Modal for full size images on click*/}

  <ImageModal />  

  {/* Third Parallax Image with Portfolio Text */}
  <div className="bgimg-3 w3-display-container w3-opacity-min">
    <div className="w3-display-middle">
      <span className="w3-xxlarge w3-text-white w3-wide">CONTACT</span>
    </div>
  </div>
  {/* Container (Contact Section) */}

  <Contact />


  {/* Footer */}

  <Footer />

</>

  );
}

export default App;
