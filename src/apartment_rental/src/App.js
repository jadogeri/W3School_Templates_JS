import ContactForm from './components/ContactForm';
import SubscribeModal from './components/SubscribeModal';
import AppHeader from './layouts/AppHeader';
import Footer from './layouts/Footer';
import OverLay from './layouts/OverLay';
import Amenities from './layouts/sections/Amenities';
import SideBar from './layouts/SideBar';
import Space from './layouts/sections/Space';
import Rules from './layouts/sections/Rules';
import { useEffect } from 'react';
import SlideShowHeader from './components/SlideShowHeader';
import SlideShowCarousel from './components/SlideShowCarousel';
import ExtraInfo from './layouts/sections/ExtraInfo';

var slideIndex = 1;

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

export const currentDiv = function(n) {
  showDivs(slideIndex = n);
}



function App() {


useEffect(()=>{
  showDivs(slideIndex);
})

  return (
<>

  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody,h1,h2,h3,h4,h5,h6 {font-family: "Raleway", Arial, Helvetica, sans-serif}\n.mySlides {display: none}\n'
    }}
  />
  {/* Sidebar/menu */}
  <SideBar />

  {/* Top menu on small screens */}

<AppHeader />
  {/* Overlay effect when opening sidebar on small screens */}

<OverLay />
  {/* !PAGE CONTENT! */}
  <div className="w3-main w3-white" style={{ marginLeft: 260 }}>
    {/* Push down content on small screens */}
    <div className="w3-hide-large" style={{ marginTop: 80 }} />
    {/* Slideshow Header */}
    <SlideShowHeader/>

  <SlideShowCarousel />
    <div className="w3-container">
      <Space />

      <hr />

      <Amenities />
    
      <hr />
      <ExtraInfo/>
  
      <hr />
      <Rules />

    </div>
    <hr />
    {/* Contact */}
    <ContactForm />
  
    <Footer />

    {/* End page content */}
  </div>
  {/* Subscribe Modal */}
  <SubscribeModal />

</>

  );
}




export default App;
