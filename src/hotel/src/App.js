import './App.css';
import AboutCard from './components/AboutCard';
import HotelCard from './components/HotelCard';
import NewsLetter from './components/NewsLetter';
import RoomCard from './components/RoomCard';
import RoomSearch from './components/RoomSearch';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import About from './layouts/sections/About';
import Contact from './layouts/sections/Contact';
import Room from './layouts/sections/Room';

function App() {
  return (
    <>
  {/* Navigation Bar */}

  <NavBar />

  {/* Header */}

  <Header />
 
  {/* Page content */}
  <div className="w3-content" style={{ maxWidth: 1532 }}>
    <Room />
    <RoomSearch />

    <div className="w3-row-padding w3-padding-16">
      <RoomCard 
        src="https://www.w3schools.com/w3images/room_single.jpg"   alt="Norway"
        header={"Single Room"} price={"$99"} bed={"Single bed"} size={"15m"}
        features={  <>
            <i className="fa fa-bath" /> <i className="fa fa-phone" />{" "}
            <i className="fa fa-wifi" />
          </>
        }          
      />
      <RoomCard 
        src="https://www.w3schools.com/w3images/room_double.jpg"  alt="Norway"
        header={"Double Room"} price={"$149"} bed={"Queen-size bed"} size={"25m"}
        features={  <>
           <i className="fa fa-bath" /> <i className="fa fa-phone" />{" "}
            <i className="fa fa-wifi" /> <i className="fa fa-tv" />
          </>
        }          
      />
      <RoomCard 
        src="https://www.w3schools.com/w3images/room_deluxe.jpg"  alt="Norway"
        header={"Deluxe Room"} price={"$199"} bed={"King-size bed"} size={"40m"}
        features={  <>
            <i className="fa fa-bath" /> <i className="fa fa-phone" />{" "}
            <i className="fa fa-wifi" /> <i className="fa fa-tv" />{" "}
            <i className="fa fa-glass" /> <i className="fa fa-cutlery" />
          </>
        }          
      />      
    </div>
    <About />
    <AboutCard />

 
    <div className="w3-panel w3-red w3-leftbar w3-padding-32">
      <h6>
        <i className="fa fa-info w3-deep-orange w3-padding w3-margin-right" />{" "}
        On demand, we can offer playstation, babycall, children care, dog
        equipment, etc.
      </h6>
    </div>
    <div className="w3-container">
      <h3>Our Hotels</h3>
      <h6>You can find our hotels anywhere in the world:</h6>
    </div>
    <div className="w3-row-padding w3-padding-16 w3-text-white w3-large">
          <HotelCard 
            src="https://www.w3schools.com/w3images/cinqueterre.jpg"
            alt="Cinque Terre" city="Cinque Terre"          
          />
        <div className="w3-half">
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <HotelCard 
            src="https://www.w3schools.com/w3images/newyork2.jpg"
            alt="New York"  city="New York"          
          />
          <HotelCard 
            src="https://www.w3schools.com/w3images/sanfran.jpg"
            alt="San Francisco"  city="San Francisco"          
          />
        </div>
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <HotelCard 
            src="https://www.w3schools.com/w3images/pisa.jpg"
            alt="Pisa"  city="Pisa"          
          />
          <HotelCard 
            src="https://www.w3schools.com/w3images/paris.jpg"
            alt="Paris"  city="Paris"          
          />

        </div>
      </div>
    </div>
    <NewsLetter />
 

    <Contact />

    {/* End page content */}
  </div>
  {/* Footer */}

  <Footer />

  {/* Add Google Maps */}
  {/*
To use this code on your website, get a free API key from Google.
Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp
*/}
</>

  );
}

export default App;
