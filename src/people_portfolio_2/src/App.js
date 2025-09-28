import "./App.css"
import AppHeader from "./layouts/AppHeader";
import SideBar from "./layouts/SideBar";
import Footer from "./layouts/Footer";
import OverLay from "./layouts/OverLay";
import Pagination from "./components/Pagination";
import Contact from "./layouts/sections/Contact";
import PhotoGrid from "./components/PhotoGrid";
import ImageModal from "./components/ImageModal";
import About from "./layouts/sections/About";

function App() {
  return (
<>
  {/* Sidebar/menu */}

  <SideBar />

  {/* Top menu on small screens */}

  <AppHeader />

  {/* Overlay effect when opening sidebar on small screens */}

  <OverLay />

  {/* !PAGE CONTENT! */}
  <div className="w3-main w3-content" style={{ maxWidth: 1600, marginTop: 83 }}>
    {/* Photo grid */}

    <PhotoGrid />

    {/* Pagination */}

    <Pagination />

    {/* Modal for full size images on click*/}

    <ImageModal />

    {/* About section */}

    <About />
 
    {/* Contact section */}

    <Contact />

    {/* Footer */}
    <Footer />

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
