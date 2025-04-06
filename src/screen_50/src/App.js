import './App.css';
import Footer from './layouts/Footer';
import Logo from './layouts/sections/Logo';
import About from './layouts/sections/About';
import Work from './layouts/sections/Work';
import Resume from './layouts/sections/Resume';
import SwingBy from './layouts/sections/SwingBy';
import Contact from './layouts/sections/Contact';


function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  {/* First Grid: Logo & About */}
  <div className="w3-row">
    <Logo />
    <About />
  
  </div>
  {/* Second Grid: Work & Resume */}
  <div className="w3-row">
    <Work />
    <Resume />

 
  </div>
  {/* Third Grid: Swing By & Contact */}
  <div className="w3-row" id="contact">
    <SwingBy />
    <Contact />  

  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
