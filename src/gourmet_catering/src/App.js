import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar';
import Header from './layouts/Header';
import About from './layouts/sections/About';
import Menu from './layouts/sections/Menu';
import Contact from './layouts/sections/Contact';

function App() {
  return (
<>

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
