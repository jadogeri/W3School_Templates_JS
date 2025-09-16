import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

var slideIndex = 1;

function App() {

  

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demodots");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}

useEffect(()=>{
  showDivs(slideIndex);


})
  return (
<>
  {/* Links (sit on top) */}
  <div className="w3-top">
    <div className="w3-row w3-large w3-light-grey">
      <div className="w3-col s3">
        <a href="#" className="w3-button w3-block">
          Home
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#plans" className="w3-button w3-block">
          Plans
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#about" className="w3-button w3-block">
          About
        </a>
      </div>
      <div className="w3-col s3">
        <a href="#contact" className="w3-button w3-block">
          Contact
        </a>
      </div>
    </div>
  </div>
  {/* Content */}
  <div
    className="w3-content"
    style={{ maxWidth: 1100, marginTop: 80, marginBottom: 80 }}
  >
    <div className="w3-panel">
      <h1>
        <b>MARKETING</b>
      </h1>
      <p>Template by w3.css</p>
    </div>
    {/* Slideshow */}
    <div className="w3-container">
      <div className="w3-display-container mySlides">
        <img src="https://www.w3schools.com/w3images/coffee.jpg" style={{ width: "100%" }} />
        <div className="w3-display-topleft w3-container w3-padding-32">
          <span className="w3-white w3-padding-large w3-animate-bottom">
            Lorem ipsum
          </span>
        </div>
      </div>
      <div className="w3-display-container mySlides">
        <img src="https://www.w3schools.com/w3images/workbench.jpg" style={{ width: "100%" }} />
        <div className="w3-display-middle w3-container w3-padding-32">
          <span className="w3-white w3-padding-large w3-animate-bottom">
            Klorim tipsum
          </span>
        </div>
      </div>
      <div className="w3-display-container mySlides">
        <img src="https://www.w3schools.com/w3images/sound.jpg" style={{ width: "100%" }} />
        <div className="w3-display-topright w3-container w3-padding-32">
          <span className="w3-white w3-padding-large w3-animate-bottom">
            Blorum pipsum
          </span>
        </div>
      </div>
      {/* Slideshow next/previous buttons */}
      <div className="w3-container w3-dark-grey w3-padding w3-xlarge">
        <div className="w3-left" onClick={()=>{plusDivs(-1)}}>
          <i className="fa fa-arrow-circle-left w3-hover-text-teal" />
        </div>
        <div className="w3-right" onClick={()=>{plusDivs(1)}}>
          <i className="fa fa-arrow-circle-right w3-hover-text-teal" />
        </div>
        <div className="w3-center">
          <span
            className="w3-tag demodots w3-border w3-transparent w3-hover-white"
            onClick={()=>{currentDiv(1)}}
          />
          <span
            className="w3-tag demodots w3-border w3-transparent w3-hover-white"
            onClick={()=>{currentDiv(2)}}
          />
          <span
            className="w3-tag demodots w3-border w3-transparent w3-hover-white"
            onClick={()=>{currentDiv(3)}}
          />
        </div>
      </div>
    </div>
    {/* Grid */}
    <div className="w3-row w3-container">
      <div className="w3-center w3-padding-64">
        <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
          What We Offer
        </span>
      </div>
      <div className="w3-col l3 m6 w3-light-grey w3-container w3-padding-16">
        <h3>Design</h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
      </div>
      <div className="w3-col l3 m6 w3-grey w3-container w3-padding-16">
        <h3>Branding</h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
      </div>
      <div className="w3-col l3 m6 w3-dark-grey w3-container w3-padding-16">
        <h3>Consultation</h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
      </div>
      <div className="w3-col l3 m6 w3-black w3-container w3-padding-16">
        <h3>Promises</h3>
        <p>
          Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales
          pellentesque elementum.
        </p>
      </div>
    </div>
    {/* Grid */}
    <div className="w3-row-padding" id="plans">
      <div className="w3-center w3-padding-64">
        <h3>Pricing Plans</h3>
        <p>Choose a pricing plan that fits your needs.</p>
      </div>
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-center w3-hover-shadow">
          <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
          <li className="w3-padding-16">
            <b>10GB</b> Storage
          </li>
          <li className="w3-padding-16">
            <b>10</b> Emails
          </li>
          <li className="w3-padding-16">
            <b>10</b> Domains
          </li>
          <li className="w3-padding-16">
            <b>Endless</b> Support
          </li>
          <li className="w3-padding-16">
            <h2 className="w3-wide">$ 10</h2>
            <span className="w3-opacity">per month</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-green w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-center w3-hover-shadow">
          <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
          <li className="w3-padding-16">
            <b>25GB</b> Storage
          </li>
          <li className="w3-padding-16">
            <b>25</b> Emails
          </li>
          <li className="w3-padding-16">
            <b>25</b> Domains
          </li>
          <li className="w3-padding-16">
            <b>Endless</b> Support
          </li>
          <li className="w3-padding-16">
            <h2 className="w3-wide">$ 25</h2>
            <span className="w3-opacity">per month</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-green w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-center w3-hover-shadow">
          <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
          <li className="w3-padding-16">
            <b>50GB</b> Storage
          </li>
          <li className="w3-padding-16">
            <b>50</b> Emails
          </li>
          <li className="w3-padding-16">
            <b>50</b> Domains
          </li>
          <li className="w3-padding-16">
            <b>Endless</b> Support
          </li>
          <li className="w3-padding-16">
            <h2 className="w3-wide">$ 50</h2>
            <span className="w3-opacity">per month</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-green w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
    {/* Grid */}
    <div className="w3-row-padding" id="about">
      <div className="w3-center w3-padding-64">
        <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
          Who We Are
        </span>
      </div>
      <div className="w3-third w3-margin-bottom">
        <div className="w3-card-4">
          <img src="https://www.w3schools.com/w3images/team1.jpg" alt="John" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Jane Doe</h3>
            <p className="w3-opacity">CEO &amp; Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w3-third w3-margin-bottom">
        <div className="w3-card-4">
          <img src="https://www.w3schools.com/w3images/team2.jpg" alt="Mike" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>Mike Ross</h3>
            <p className="w3-opacity">Art Director</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="w3-third w3-margin-bottom">
        <div className="w3-card-4">
          <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Jane" style={{ width: "100%" }} />
          <div className="w3-container">
            <h3>John Doe</h3>
            <p className="w3-opacity">Designer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Contact */}
    <div className="w3-center w3-padding-64" id="contact">
      <span className="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">
        Contact Us
      </span>
    </div>
    <form className="w3-container" action="/action_page.php" target="_blank">
      <div className="w3-section">
        <label>Name</label>
        <input
          className="w3-input w3-border w3-hover-border-black"
          style={{ width: "100%" }}
          type="text"
          name="Name"
          required=""
        />
      </div>
      <div className="w3-section">
        <label>Email</label>
        <input
          className="w3-input w3-border w3-hover-border-black"
          style={{ width: "100%" }}
          type="text"
          name="Email"
          required=""
        />
      </div>
      <div className="w3-section">
        <label>Subject</label>
        <input
          className="w3-input w3-border w3-hover-border-black"
          style={{ width: "100%" }}
          name="Subject"
          required=""
        />
      </div>
      <div className="w3-section">
        <label>Message</label>
        <input
          className="w3-input w3-border w3-hover-border-black"
          style={{ width: "100%" }}
          name="Message"
          required=""
        />
      </div>
      <button type="submit" className="w3-button w3-block w3-black">
        Send
      </button>
    </form>
  </div>
  {/* Footer */}
  <footer className="w3-container w3-padding-32 w3-light-grey w3-center">
    <h4>Footer</h4>
    <a href="#" className="w3-button w3-black w3-margin">
      <i className="fa fa-arrow-up w3-margin-right" />
      To the top
    </a>
    <div className="w3-xlarge w3-section">
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
