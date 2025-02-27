import ContactForm from './components/ContactForm';
import PhotoCard from './components/PhotoCard';
import Header from './layouts/Header';

function App() {
  return (
    <>
  {/* !PAGE CONTENT! */}
  <div className="w3-content" style={{ maxWidth: 1500 }}>
    {/* Header */}

    <Header />
    {/* Photo Grid */}
    <div className="w3-row">
      <div className="w3-half">
        <PhotoCard src="https://www.w3schools.com/w3images/streetart.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/streetart2.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/streetart5.jpg" />
      </div>
      <div className="w3-half">
        <PhotoCard src="https://www.w3schools.com/w3images/streetart3.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/streetart4.jpg" />
      </div>
    </div>
    {/* End Page Content */}
  </div>
  {/* Footer / About Section */}
  <footer className="w3-light-grey w3-padding-64 w3-center" id="about">
    <h2>About</h2>
    <img
      src="https://www.w3schools.com/w3images/boy.jpg"
      className="w3-image w3-padding-32"
      width={300}
      height={300}
    />
  <ContactForm />  
    <br />
    <p>
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        target="_blank"
        className="w3-hover-text-green"
      >
        w3.css
      </a>
    </p>
  </footer>
</>


  );
}

export default App;
