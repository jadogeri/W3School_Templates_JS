
import './App.css';
import Footer from './layouts/Footer';
import Contact from './layouts/sections/Contact';
import Pricing from './layouts/sections/Pricing';
import Skills from './layouts/sections/Skills';
import Work from './layouts/sections/Work';
import Statistics from './layouts/sections/Statistics';
import Team from './layouts/sections/Team';
import Promo from './layouts/sections/Promo';
import About from './layouts/sections/About';
import SideBar from './layouts/SideBar';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';

function App() {

  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
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

  {/* Navbar (sit on top) */}
  <NavBar />

  {/* Sidebar on small screens when clicking the menu icon */}
  <SideBar/>

  {/* Header with full-height image */}
  <Header />


  {/* About Section */}

    <About />
  {/* Promo Section - "We know design" */}

    <Promo />
  {/* Team Section */}
  <Team />

  {/* Promo Section "Statistics" */}

    <Statistics />

  {/* Work Section */}
    <Work />

  {/* Modal for full size images on click*/}
  <div
    id="modal01"
    className="w3-modal w3-black"
    onClick={()=>{this.style.display='none'}}
  >
    <span
      className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright"
      title="Close Modal Image"
    >
      ×
    </span>
    <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
      <img id="img01" className="w3-image" />
      <p id="caption" className="w3-opacity w3-large" />
    </div>
  </div>
  {/* Skills Section */}

  <Skills />
  {/* Pricing Section */}
  <Pricing />

  {/* Contact Section */}
  <Contact />

  {/* Footer */}
 <Footer />
</>

  );
}

export default App;
