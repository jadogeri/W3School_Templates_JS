import './App.css';
import Footer from './layouts/Footer';
import PhotoGrid from './layouts/sections/PhotoGrid';
import SideBar from './layouts/SideBar';
import { myFunction } from './utils/myFunction';
import { w3_open } from './utils/w3_open';

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Montserrat"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody,h1 {font-family: "Montserrat", sans-serif}\nimg {margin-bottom: -7px}\n.w3-row-padding img {margin-bottom: 12px}\n'
    }}
  />
  {/* Sidebar */}
<SideBar/>
  {/* !PAGE CONTENT! */}
  <div className="w3-content" style={{ maxWidth: 1500 }}>
    {/* Header */}
    <div className="w3-opacity">
      <span
        className="w3-button w3-xxlarge w3-white w3-right"
        onClick={()=>{w3_open()}}
      >
        <i className="fa fa-bars" />
      </span>
      <div className="w3-clear" />
      <header className="w3-center w3-margin-bottom">
        <h1>
          <b>PHOTOLIO</b>
        </h1>
        <p>
          <b>A template made by w3.css for photographers.</b>
        </p>
        <p className="w3-padding-16">
          <button className="w3-button w3-black" onClick={()=>{myFunction()}}>
            Toggle Grid Padding
          </button>
        </p>
      </header>
    </div>
    {/* Photo Grid */}
    <PhotoGrid />
  
    {/* End Page Content */}
  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
