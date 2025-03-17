import './App.css';
import ImageCard from './components/ImageCard';

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <div className="w3-display-container" style={{ marginBottom: 50 }}>
    <img src="https://www.w3schools.com/w3images/beach3.jpg" style={{ width: "100%" }} alt='img' />
    <div
      className="w3-display-bottomleft w3-container w3-amber w3-hover-orange w3-hide-small"
      style={{ bottom: "10%", opacity: "0.7", width: "70%" }}
    >
      <h2>
        <b>
          4 Good Reasons
          <br />
          For travelling with us
        </b>
      </h2>
    </div>
  </div>
  <div className="w3-row w3-container" style={{ margin: "50px 0" }}>
    <ImageCard 
      src="https://www.w3schools.com/w3images/cellphone.jpg"  alt='img'
      className="w3-topbar w3-border-amber"
      title="Smart Vacation" description="Full vacation control from your cell phone."
    
    />
    <ImageCard 
      src="https://www.w3schools.com/w3images/sealions.jpg"  alt='img'
      className="w3-topbar w3-border-amber"
      title="Super Offers" description="Up to 50% offers. Always 25% student offers."
    
    />
</div>
  <div className="w3-row w3-container" style={{ margin: "50px 0" }}>
    <ImageCard 
      src="https://www.w3schools.com/w3images/truck.jpg" alt='img'
      className="w3-topbar w3-border-orange"
      title="Car Rental Included" description="Wherever you travel our car rental is included."
   
    />
    <ImageCard 
      src="https://www.w3schools.com/w3images/nowornever.jpg" alt='img'
      className="w3-topbar w3-border-orange"
      title="Realize Your Dreams" description="Don't wait until it is to late."
    
    />


  </div>
</>

  );
}

export default App;
