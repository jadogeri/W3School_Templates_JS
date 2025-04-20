import ContactModal from './components/ContactModal';
import MenuModal from './components/MenuModal';
import "./App.css"
import ModalButton from './components/ModalButton';

function App() {
  return (
    <>
    <title>W3.CSS Template</title>
    <div className="bgimg w3-display-container w3-text-white">
      <div className="w3-display-middle w3-jumbo">
        <p>logo</p>
      </div>
      <div className="w3-display-topleft w3-container w3-xlarge">
        <ModalButton
          id="menu" name="menu"
        />
        <ModalButton
          id="contact" name="contact"
        />


      </div>
      <div className="w3-display-bottomleft w3-container">
        <p className="w3-xlarge">monday - friday 10-23 | saturday 14-02</p>
        <p className="w3-large">42 village St, New York</p>
        <p>
          powered by{" "}
          <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
            w3.css
          </a>
        </p>
      </div>
    </div>
    {/* Menu Modal */}
    <MenuModal />

    {/* Contact Modal */}
    <ContactModal />

  </>
  
  );
}

export default App;
