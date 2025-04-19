import LocationCard from "./components/LocationCard";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import NavBar from "./layouts/NavBar";
import Contact from "./layouts/sections/Contact";
import NewsLetter from "./layouts/sections/NewsLetter";
import "./App.css"

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Raleway"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  {/* Navigation Bar */}
  <NavBar />

  {/* Header */}
  <Header />
 
  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 1100 }}>
    {/* Good offers */}
    <div className="w3-container w3-margin-top">
      <h3>Good Offers Right Now</h3>
      <h6>
        Up to <strong>50%</strong> discount.
      </h6>
    </div>
    <div className="w3-row-padding w3-text-white w3-large">
      <div className="w3-half w3-margin-bottom">
        <div className="w3-display-container">
          <img
            src="https://www.w3schools.com/w3images/cinqueterre.jpg"
            alt="Cinque Terre"
            style={{ width: "100%" }}
          />
          <span className="w3-display-bottomleft w3-padding">Cinque Terre</span>
        </div>
      </div>
      <div className="w3-half">
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <LocationCard
            alt="New York" name="New York" src="https://www.w3schools.com/w3images/newyork2.jpg"
          />
          <LocationCard
            alt="San Francisco" name="San Francisco" src="https://www.w3schools.com/w3images/sanfran.jpg"
          />
        </div>
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <LocationCard
              alt="Pisa" name="Pisa" src="https://www.w3schools.com/w3images/pisa.jpg"
            />
          <LocationCard
            alt="Paris" name="Paris" src="https://www.w3schools.com/w3images/paris.jpg"
          />
        </div>
      </div>
    </div>
    {/* Explore Nature */}
    <div className="w3-container">
      <h3>Explore Nature</h3>
      <p>Travel with us and see nature at its finest.</p>
    </div>
    <div className="w3-row-padding">
      <div className="w3-half w3-margin-bottom">
        <img
          src="https://www.w3schools.com/w3images/ocean2.jpg"
          alt="Norway"
          style={{ width: "100%" }}
        />
        <div className="w3-container w3-white">
          <h3>West Coast, Norway</h3>
          <p className="w3-opacity">Roundtrip from $79</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button className="w3-button w3-margin-bottom">Buy Tickets</button>
        </div>
      </div>
      <div className="w3-half w3-margin-bottom">
        <img
          src="https://www.w3schools.com/w3images/mountains2.jpg"
          alt="Austria"
          style={{ width: "100%" }}
        />
        <div className="w3-container w3-white">
          <h3>Mountains, Austria</h3>
          <p className="w3-opacity">One-way from $39</p>
          <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
          <button className="w3-button w3-margin-bottom">Buy Tickets</button>
        </div>
      </div>
    </div>
    {/* Newsletter */}
    <NewsLetter />

    {/* Contact */}
    <Contact />

    {/* End page content */}
  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
