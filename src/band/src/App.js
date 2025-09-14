import { useEffect } from "react";
import AppBar from "./layouts/AppBar";
import Footer from "./layouts/Footer";
import Band from "./layouts/sections/Band";
import SlideShow from "./components/SlideShow";
import Map from "./components/Map";
import Contact from "./layouts/sections/Contact";
import TicketModal from "./components/TicketModal";
import Tour from "./layouts/sections/Tour";
import NavBar from "./layouts/NavBar";

var myIndex = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}


// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function App() {

  useEffect(()=>{
carousel();

  })

  return (
<>
  {/* Navbar */}

  <NavBar />

  {/* Navbar on small screens (remove the onClick attribute if you want the navbar to always show on top of the content when clicking on the links) */}
<AppBar />

  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 2000, marginTop: 46 }}>
    {/* Automatic Slideshow Images */}
    
    <SlideShow />

    {/* The Band Section */}
    <Band />

    {/* The Tour Section */}

    <Tour />

    {/* Ticket Modal */}
    
    <TicketModal />
 
    {/* The Contact Section */}

    <Contact />
  
    {/* End Page Content */}
  </div>
  {/* Image of location/map */}

  <Map />

  {/* Footer */}
  <Footer/>

</>

  );
}

export default App;
