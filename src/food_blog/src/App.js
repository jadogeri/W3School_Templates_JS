import './App.css';
import SideBar from './layouts/SideBar';
import Hamburger from './components/Hamburger';
import Pagination from './components/Pagination';
import Footer from './layouts/Footer';
import About from './layouts/sections/About';
import FoodCard from './components/FoodCard';

function App() {
  return (
<>
  {/* Sidebar (hidden by default) */}
  <SideBar />
  {/* Top menu */}
  <div className="w3-top">
    <div
      className="w3-white w3-xlarge"
      style={{ maxWidth: 1200, margin: "auto" }}
    >
     <Hamburger />
      <div className="w3-right w3-padding-16">Mail</div>
      <div className="w3-center w3-padding-16">My Food</div>
    </div>
  </div>
  {/* !PAGE CONTENT! */}
  <div
    className="w3-main w3-content w3-padding"
    style={{ maxWidth: 1200, marginTop: 100 }}
  >
    {/* First Photo Grid*/}
    <div className="w3-row-padding w3-padding-16 w3-center" id="food">
      <FoodCard 
        src="https://www.w3schools.com/w3images/sandwich.jpg"
        alt="Sandwich" review="The Perfect Sandwich, A Real NYC Classic"
        description="Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum."
      />
      <FoodCard 
        src="https://www.w3schools.com/w3images/steak.jpg" 
        alt="Steak" review="Let Me Tell You About This Steak"
        description="Once again, some random text to lorem lorem lorem lorem ipsum text
          praesent tincidunt ipsum lipsum."
      />
      <FoodCard 
        src="https://www.w3schools.com/w3images/cherries.jpg"
        alt="Cherries" review="Cherries, interrupted"
        description={<><p>Lorem ipsum text praesent tincidunt ipsum lipsum.</p>
        <p>What else?</p></>}
      />
      <FoodCard
        src="https://www.w3schools.com/w3images/wine.jpg"
        alt="Pasta and Wine" review="Once Again, Robust Wine and Vegetable Pasta"
        description="Lorem ipsum text praesent tincidunt ipsum lipsum."
      />
    </div>
    {/* Second Photo Grid*/}
    <div className="w3-row-padding w3-padding-16 w3-center">
      <FoodCard
        src="https://www.w3schools.com/w3images/popsicle.jpg"
        alt="Popsicle" review="All I Need Is a Popsicle"
        description="Lorem ipsum text praesent tincidunt ipsum lipsum."
      />      
      <FoodCard
        src="https://www.w3schools.com/w3images/salmon.jpg"
        alt="Salmon" review="Salmon For Your Skin"
        description="Once again, some random text to lorem lorem lorem lorem ipsum text
          praesent tincidunt ipsum lipsum."
      />
      <FoodCard
        src="https://www.w3schools.com/w3images/sandwich.jpg"
        alt="Sandwich" review="The Perfect Sandwich, A Real Classic"
        description="Just some random text, lorem ipsum text praesent tincidunt ipsum
          lipsum."
      />
      <FoodCard
        src="https://www.w3schools.com/w3images/croissant.jpg"
        alt="Croissant" review="Le French"
        description="Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum."
      />
    </div>
    {/* Pagination */}
    <Pagination />

    {/* About Section */}
    <About />

    {/* Footer */}
    <Footer />
    {/* End page content */}
  </div>
</>

  );
}

export default App;
