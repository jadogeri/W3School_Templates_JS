import './App.css';
import Map from './components/Map';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import About from './layouts/sections/About';
import Contact from './layouts/sections/Contact';
import Menu from './layouts/sections/Menu';

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
  <NavBar />

  {/* Header with image */}
  <Header />

  {/* Menu Container */}
  <div className="w3-container w3-black w3-padding-64 w3-xxlarge" id="menu">
    <Menu />
  </div>
  {/* About Container */}
  <About />
 
  {/* Image of location/map */}
  <Map />

  {/* Contact */}
  <Contact />

  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
