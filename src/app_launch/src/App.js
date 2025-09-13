import { useEffect } from "react";
import Footer from "./layouts/Footer";
import AppSection from "./layouts/sections/AppSection";
import Pricing from "./layouts/sections/Pricing";
import Features from "./layouts/sections/Features";
import Clarity from "./layouts/sections/Clarity";
import DownloadModal from "./components/DownloadModal";
import TakeTourButton from "./components/TakeTourButton";
// Slideshow
var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
function App() {

  useEffect(()=>{
    showDivs(slideIndex);
  })
  
  return (
<>
  {/* Header with Slideshow */}
  <header className="w3-display-container w3-center">
    <button
      className="w3-button w3-block w3-green w3-hide-large w3-hide-medium"
      onClick={()=>{document.getElementById('download').style.display='block'}}
    >
      Download <i className="fa fa-android" /> <i className="fa fa-apple" />{" "}
      <i className="fa fa-windows" />
    </button>
    <div className="mySlides w3-animate-opacity">
      <img
        className="w3-image"
        src="https://www.w3schools.com/w3images/app.jpg"
        alt="Image 1"
        style={{ minWidth: 500}}
        width={"100%"}
        height={1000}
      />
      <div
        className="w3-display-left w3-padding w3-hide-small"
        style={{ width: "35%" }}
      >
        <div className="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
          <h1 className="w3-xlarge">Take photos with our app</h1>
          <hr className="w3-opacity" />
          <p>Super simple installment: free of charge</p>
          <p>
            <button
              className="w3-button w3-block w3-green w3-round"
              onClick={()=>{document.getElementById('download').style.display='block'}}
            >
              Download <i className="fa fa-android" />{" "}
              <i className="fa fa-apple" /> <i className="fa fa-windows" />
            </button>
          </p>
        </div>
      </div>
    </div>
    <div className="mySlides w3-animate-opacity">
      <img
        className="w3-image"
        src="https://www.w3schools.com/w3images/app2.jpg"
        alt="Image 2"
        style={{ minWidth: 500 }}
        width={1500}
        height={1000}
      />
      <div
        className="w3-display-left w3-padding w3-hide-small"
        style={{ width: "35%" }}
      >
        <div className="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
          <h1 className="w3-xlarge w3-text-red">
            <b>CLICK!</b> Fast and Easy
          </h1>
          <hr className="w3-opacity" />
          <p>Choose from thousands of features</p>
          <p>
            <button
              className="w3-button w3-block w3-red w3-round"
              onClick={()=>{document.getElementById('download').style.display='block'}}
            >
              Download <i className="fa fa-android" />{" "}
              <i className="fa fa-apple" /> <i className="fa fa-windows" />
            </button>
          </p>
        </div>
      </div>
    </div>
    <div className="mySlides w3-animate-opacity">
      <img
        className="w3-image"
        src="https://www.w3schools.com/w3images/app4.jpg"
        alt="Image 3"
        style={{ minWidth: 500 }}
        width={1500}
        height={1000}
      />
      <div
        className="w3-display-left w3-padding w3-hide-small"
        style={{ width: "35%" }}
      >
        <div className="w3-black w3-opacity w3-hover-opacity-off w3-padding-large w3-round-large">
          <h1 className="w3-xlarge">Smart Design</h1>
          <hr className="w3-opacity" />
          <p>Customize photos as you go</p>
          <p>
            <button
              className="w3-button w3-block w3-indigo w3-round"
              onClick={()=>{document.getElementById('download').style.display='block'}}
            >
              Download <i className="fa fa-android" />{" "}
              <i className="fa fa-apple" /> <i className="fa fa-windows" />
            </button>
          </p>
        </div>
      </div>
    </div>
    <TakeTourButton 
      onClick={()=>{plusDivs(1)}}
      className="w3-display-right w3-margin-right w3-round w3-hide-small w3-hover-light-grey"    
    />
    <TakeTourButton 
      onClick={()=>{plusDivs(1)}}
      className="w3-block w3-hide-large w3-hide-medium"    
    />
  </header>
  {/* The App Section */}

  <AppSection/>
 
  {/* Modal */}
  <DownloadModal />

  {/* Clarity Section */}
  <Clarity />

  {/* Features Section */}
  <Features />
 
  {/* Pricing Section */}
  <Pricing />

  {/* Footer */}
<Footer/>
</>

  );
}

export default App;



