import './App.css';
import Pagination from './components/Pagination';
import PhotoCard from './components/PhotoCard';
import PricingTable from './components/PricingTable';
import ProgressBar from './components/ProgressBar';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import OverLay from './layouts/OverLay';
import About from './layouts/sections/About';
import Contact from './layouts/sections/Contact';
import SideBar from './layouts/SideBar';

function App() {
  return (
<>
  {/* Sidebar/menu */}

  <SideBar />

  {/* Overlay effect when opening sidebar on small screens */}

<OverLay />
  {/* !PAGE CONTENT! */}
  <div className="w3-main" style={{ marginLeft: 300 }}>
    {/* Header */}

    <Header />

    {/* First Photo Grid*/}
    <div className="w3-row-padding">
  <PhotoCard 
    src="https://www.w3schools.com/w3images/mountains.jpg" alt="Norway"
    title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla."
  />
  <PhotoCard 
    src="https://www.w3schools.com/w3images/lights.jpg" alt="Norway"
    title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla."
  />
  <PhotoCard 
    src="https://www.w3schools.com/w3images/nature.jpg" alt="Norway"
    title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla."
  />
    </div>
    {/* Second Photo Grid*/}
    <div className="w3-row-padding">
  <PhotoCard 
    src="https://www.w3schools.com/w3images/p1.jpg" alt="Norway"
    title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla."
  />
  <PhotoCard 
    src="https://www.w3schools.com/w3images/p2.jpg" alt="Norway"
    title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla."
  />
  <PhotoCard 
    src="https://www.w3schools.com/w3images/p3.jpg" alt="Norway"
    title="Lorem Ipsum" description="Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla."
  />
      </div>
    {/* Pagination */}
    <Pagination />

    {/* Images of Me */}

    <About />

    <div className="w3-container w3-padding-large" style={{ marginBottom: 32 }}>
      <h4>
        <b>About Me</b>
      </h4>
      <p>
        Just me, myself and I, exploring the universe of unknownment. I have a
        heart of love and an interest of lorem ipsum and mauris neque quam blog.
        I want to share my world with you. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
        rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
        congue gravida diam non fringilla.
      </p>
      <hr />
      <h4>Technical Skills</h4>
      {/* Progress bars / Skills */}
      <ProgressBar 
        name="Photography" percentage={"95%" }
      />
      <ProgressBar 
        name="Web Design" percentage={"85%" }
      />
      <ProgressBar 
        name="Photoshop" percentage={"80%" }
      />
      <p>
        <button className="w3-button w3-dark-grey w3-padding-large w3-margin-top w3-margin-bottom">
          <i className="fa fa-download w3-margin-right" />
          Download Resume
        </button>
      </p>
      <hr />
      <h4>How much I charge</h4>
      {/* Pricing Tables */}

      <PricingTable />
    </div>
    {/* Contact Section */}

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
