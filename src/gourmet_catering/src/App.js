import Footer from './layouts/Footer';
import './App.css';
import NavBar from './layouts/NavBar';
import Header from './layouts/Header';
import About from './layouts/sections/About';
import Menu from './layouts/sections/Menu';
import Contact from './layouts/sections/Contact';

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" to="https://www.w3schools.com/w3css/4/w3.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody {font-family: "Times New Roman", Georgia, Serif;}\nh1, h2, h3, h4, h5, h6 {\n  font-family: "Playfair Display";\n  letter-spacing: 5px;\n}\n'
    }}
  />
  {/* Navbar (sit on top) */}

  <NavBar/>
 
  {/* Header */}

  <Header />
  
  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 1100 }}>
    {/* About Section */}
    
    <About />

    <hr />
    {/* Menu Section */}
    
    <Menu />
    <hr />
    {/* Contact Section */}

    <Contact />

    {/* End page content */}
  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
