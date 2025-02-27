import Header from "./layouts/Header";
import NavBar from "./layouts/NavBar";
import Contact from "./layouts/sections/Contact";
import Portfolio from "./layouts/sections/Portfolio";

function App() {
  return (
    <>
  {/* Header */}
    <Header />

  {/* Navbar on small screens */}
    <NavBar />


  {/* Page content */}
  <div className="w3-content w3-padding-large w3-margin-top" id="portfolio">
    {/* Images (Portfolio) */}

      <Portfolio />
    {/* Contact */}

      <Contact />

    {/* End page content */}
  </div>
</>


  );
}

export default App;
