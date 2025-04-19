import Footer from "./layouts/Footer"
import SideBar from  "./layouts/SideBar"
import NavBar from  "./layouts/NavBar"
import Header from  "./layouts/Header"
import About from  "./layouts/sections/About"
import Contact from  "./layouts/sections/Contact"
import Portfolio from  "./layouts/sections/Portfolio"


import "./App.css"

function App() {
  return (
<body className="w3-black">

  {/* Icon Bar (Sidebar - hidden on small screens) */}
  <SideBar/>

  {/* Navbar on small screens (Hidden on medium and large screens) */}

  <NavBar />
  {/* Page Content */}
  <div className="w3-padding-large" id="main">
    {/* Header/Home */}
    <Header />
    {/* About Section */}
    <About />
 
    {/* Portfolio Section */}
    <Portfolio />

    {/* Contact Section */}
    <Contact />

    {/* Footer */}
    <Footer />

    {/* END PAGE CONTENT */}
  </div>
</body>

  );
}

export default App;
