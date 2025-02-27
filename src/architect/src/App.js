import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import About from './layouts/sections/About';
import Contact from './layouts/sections/Contact';
import Project from './layouts/sections/Project';

function App() {
  return (
<>
  {/* Navbar (sit on top) */}
  <NavBar />
  {/* Header */}
   <Header />
  
  {/* Page content */}
  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
    {/* Project Section */}

    <Project />
   
    {/* About Section */}

    <About />

    {/* Contact Section */}
    <Contact />

    {/* Image of location/map */}
    <div className="w3-container">
      <img
        src="https://www.w3schools.com/w3images/map.jpg"
        className="w3-image"
        style={{ width: "100%" }}
      />
    </div>
    {/* End page content */}
  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
