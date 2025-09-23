import logo from './logo.svg';
import './App.css';
import SideBar from './layouts/SideBar';
import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar';
import AppBar from './layouts/AppBar';
import ImageHeader from './components/ImageHeader';
import Modal from './components/Modal';
import TeamContainer from './layouts/sections/TeamContainer';
import Work from './layouts/sections/Work';
import Contact from './layouts/sections/Contact';
import Pricing from './layouts/sections/Pricing';
import Map from './components/Map';
import {w3_open} from "./utils/w3_open"

function App() {
  return (
<>
  {/* Sidebar on click */}
  <SideBar />

  {/* Navbar */}
  <div className="w3-top">

    <NavBar />

    {/* Navbar on small screens */}
<AppBar />

  </div>
  {/* Image Header */}

  <ImageHeader />


  {/* Modal */}
    <Modal />

  {/* Team Container */}

  <TeamContainer />

  {/* Work Row */}

  <Work />

  {/* Container */}
  <div className="w3-container" style={{ position: "relative" }}>
    <a
      ocnCick={()=>{w3_open()}}
      className="w3-button w3-xlarge w3-circle w3-teal"
      style={{ position: "absolute", top: "-28px", right: 24 }}
    >
      +
    </a>
  </div>
  {/* Pricing Row */}

    <Pricing />


  {/* Contact Container */}

  <Contact />

  {/* Image of location/map */}

<Map />

  {/* Footer */}

<Footer />
</>

  );
}

export default App;
