import './App.css';
import { useEffect } from 'react';
import NavBar from './layouts/NavBar';
import Footer from './layouts/Footer';
import Contact from './layouts/sections/Contact';
import ContactForm from './components/ContactForm';
import About from './layouts/sections/About';
import Plans from './layouts/sections/Plans';
import SlideShowController from './components/SlideShowController';
import { Slide } from './components/Slide';

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
<NavBar />
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
      <Slide src="https://www.w3schools.com/w3images/coffee.jpg" 
      className="w3-display-topleft w3-container w3-padding-32"title="Lorem ipsum"
      />
      <Slide src="https://www.w3schools.com/w3images/workbench.jpg" 
      className="w3-display-middle w3-container w3-padding-32" title="Klorim tipsum"
      />
      <Slide  src="https://www.w3schools.com/w3images/sound.jpg" 
      className="w3-display-topright w3-container w3-padding-32" title="Blorum pipsum"
       />
      
      {/* Slideshow next/previous buttons */}

      <SlideShowController 
        plusDivs={plusDivs} currentDiv={currentDiv}      
      />
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

    <Plans />
 
    {/* Grid */}

    <About />

    {/* Contact */}
    <Contact />
    <ContactForm />

  </div>
  {/* Footer */}
  <Footer />
</>

  );
}

export default App;
