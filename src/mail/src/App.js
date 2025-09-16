import './App.css';
import { openMail } from './utils/openMail';
import { w3_close } from './utils/w3_close';
import { w3_open } from './utils/w3_open';
import { useEffect, useState } from 'react';
import { myFunc } from './utils/myFunc';
import MessageModal from './components/MessageModal';
import SideBar from './layouts/SideBar';


function App() {
  const [init, setInit] = useState(true)


  const handleOpenTab = ()=>{
    var openTab = document.getElementById("firstTab");
    openTab.click();
  }

  const handleOpenInbox = ()=>{
    var openInbox = document.getElementById("myBtn");
    openInbox.click();
  }

  useEffect(()=>{
    handleOpenInbox();
    handleOpenTab();
    openMail("Borge");
    setInit(false)
  },[init])
  return (
<>
  {/* Side Navigation */}

  <SideBar />
 
  {/* Modal that pops up when you click on "New Message" */}
  <MessageModal />

  {/* Overlay effect when opening the side navigation on small screens */}
  <div
    className="w3-overlay w3-hide-large w3-animate-opacity"
    onClick={()=>{w3_close()}}
    style={{ cursor: "pointer" }}
    title="Close Sidemenu"
    id="myOverlay"
  />
  {/* Page content */}
  <div className="w3-main" style={{ marginLeft: 320 }}>
    <i
      className="fa fa-bars w3-button w3-white w3-hide-large w3-xlarge w3-margin-left w3-margin-top"
      onClick={()=>{w3_open()}}
    />
    <a
      // href="javascript:void(0)"
      className="w3-hide-large w3-red w3-button w3-right w3-margin-top w3-margin-right"
      onClick={()=>{document.getElementById('id01').style.display='block'}}
    >
      <i className="fa fa-pencil" />
    </a>
    <div id="Borge" className="w3-container person">
      <br />
      <img
        className="w3-round  w3-animate-top"
        src="https://www.w3schools.com/w3images/avatar3.png"
        style={{ width: "20%" }}
      />
      <h5 className="w3-opacity">Subject: Remember Me</h5>
      <h4>
        <i className="fa fa-clock-o" /> From Borge Refsnes, Sep 27, 2015.
      </h4>
      <a className="w3-button w3-light-grey" href="#">
        Reply
        <i className="w3-margin-left fa fa-mail-reply" />
      </a>
      <a className="w3-button w3-light-grey" href="#">
        Forward
        <i className="w3-margin-left fa fa-arrow-right" />
      </a>
      <hr />
      <p>
        Hello, i just wanted to let you know that i'll be home at lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Best Regards, <br />
        Borge Refsnes
      </p>
    </div>
    <div id="Jane" className="w3-container person">
      <br />
      <img
        className="w3-round w3-animate-top"
        src="https://www.w3schools.com/w3images/avatar5.png"
        style={{ width: "20%" }}
      />
      <h5 className="w3-opacity">Subject: None</h5>
      <h4>
        <i className="fa fa-clock-o" /> From Jane Doe, Sep 25, 2015.
      </h4>
      <a className="w3-button w3-light-grey">
        Reply
        <i className="w3-margin-left fa fa-mail-reply" />
      </a>
      <a className="w3-button w3-light-grey">
        Forward
        <i className="w3-margin-left fa fa-arrow-right" />
      </a>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Forever yours,
        <br />
        Jane
      </p>
    </div>
    <div id="John" className="w3-container person">
      <br />
      <img
        className="w3-round w3-animate-top"
        src="https://www.w3schools.com/w3images/avatar2.png"
        style={{ width: "20%" }}
      />
      <h5 className="w3-opacity">Subject: None</h5>
      <h4>
        <i className="fa fa-clock-o" /> From John Doe, Sep 23, 2015.
      </h4>
      <a className="w3-button w3-light-grey">
        Reply
        <i className="w3-margin-left fa fa-mail-reply" />
      </a>
      <a className="w3-button w3-light-grey">
        Forward
        <i className="w3-margin-left fa fa-arrow-right" />
      </a>
      <hr />
      <p>Welcome.</p>
      <p>That's it!</p>
    </div>
  </div>
</>

  );
}

export default App;
