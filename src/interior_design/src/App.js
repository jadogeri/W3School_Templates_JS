import './App.css';
import ImageModal from './components/ImageModal';
import Overlay from './components/Overlay';
import PhotoGrid from './components/PhotoGrid';
import PricingTable from './components/PricingTable';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Contact from './layouts/sections/Contact';
import Designers from './layouts/sections/Designers';
import Packages from './layouts/sections/Packages';
import Services from './layouts/sections/Services';
import ShowCase from './layouts/sections/ShowCase';
import Team from './layouts/sections/Team';
import SideBar from './layouts/SideBar';

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
  <div className="w3-main" style={{ marginLeft: 340, marginRight: 40 }}>
    {/* Header */}

    <ShowCase />
  
    {/* Photo grid (modal) */}

    <PhotoGrid />

    {/* Modal for full size images on click*/}

<ImageModal />

    {/* Services */}

    <Services />

    {/* Designers */}

    <Designers />

    {/* The Team */}

    <Team />
  
    {/* Packages / Pricing Tables */}
    <Packages />
    <PricingTable />
 
    {/* Contact */}

    <Contact />
 
    {/* End page content */}
  </div>
  {/* W3.CSS Container */}

    <Footer />
</>

  );
}

export default App;
