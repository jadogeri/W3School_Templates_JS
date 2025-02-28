import PhotoCard from "./components/PhotoCard";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
function App() {
  return (
<>
  {/* !PAGE CONTENT! */}
  <div className="w3-content" style={{ maxWidth: 1500 }}>
    {/* Header */}
    <Header />

    {/* Photo Grid */}
    <div className="w3-row-padding w3-grayscale" style={{ marginBottom: 128 }}>
      <div className="w3-half">
        <PhotoCard src="https://www.w3schools.com/w3images/wedding.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/rocks.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/falls2.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/paris.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/nature.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/mist.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/paris.jpg" />
      </div>
      <div className="w3-half">
        <PhotoCard src="https://www.w3schools.com/w3images/underwater.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/ocean.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/wedding.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/mountainskies.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/rocks.jpg" />
        <PhotoCard src="https://www.w3schools.com/w3images/underwater.jpg" />
      </div>
    </div>
    {/* End Page Content */}
  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
