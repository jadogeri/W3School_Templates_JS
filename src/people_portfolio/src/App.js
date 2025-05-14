import Footer from './layouts/Footer';
import Header from './layouts/Header';
import SideBar from './layouts/SideBar';
import Overlay from "./components/Overlay"
import Pagination from "./components/Pagination"
import Contact from "./layouts/sections/Contact"
import PhotoGrid from "./components/PhotoGrid"
import PhotoModal from "./components/PhotoModal"
import About from "./layouts/sections/About"


function App() {
  return (
<>
  {/* Sidebar/menu */}
  <SideBar />
 
  {/* Top menu on small screens */}
  <Header />

  {/* Overlay effect when opening sidebar on small screens */}

  <Overlay />
  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 300 }}>
    {/* Push down content on small screens */}
    <div className="w3-hide-large" style={{ marginTop: 83 }} />
    {/* Photo grid */}
    <PhotoGrid />

    {/* Pagination */}
    <Pagination />

    {/* Modal for full size images on click*/}
    <PhotoModal />


    {/* About section */}
    <About />

    {/* Contact section */}
    <Contact />

    {/* Footer */}
    <Footer/>

    <div className="w3-black w3-center w3-padding-24">
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-opacity"
      >
        w3.css
      </a>
    </div>
    {/* End page content */}
  </div>
</>

  );
}

export default App;
