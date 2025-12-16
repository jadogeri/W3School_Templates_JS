import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  <link
    rel="stylesheet"
    href="https://www.w3schools.com/lib/w3-theme-black.css"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nhtml,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif;}\n.w3-sidebar {\n  z-index: 3;\n  width: 250px;\n  top: 43px;\n  bottom: 0;\n  height: inherit;\n}\n'
    }}
  />
  {/* Navbar */}
  <div className="w3-top">
    <div className="w3-bar w3-theme w3-top w3-left-align w3-large">
      <a
        className="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1"
        href="javascript:void(0)"
        onclick="w3_open()"
      >
        <i className="fa fa-bars" />
      </a>
      <a href="#" className="w3-bar-item w3-button w3-theme-l1">
        Logo
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        About
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        Values
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        News
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hover-white"
      >
        Contact
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-hover-white"
      >
        Clients
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-hide-medium w3-hover-white"
      >
        Partners
      </a>
    </div>
  </div>
  {/* Sidebar */}
  <nav
    className="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left"
    id="mySidebar"
  >
    <a
      href="javascript:void(0)"
      onclick="w3_close()"
      className="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large"
      title="Close Menu"
    >
      <i className="fa fa-remove" />
    </a>
    <h4 className="w3-bar-item">
      <b>Menu</b>
    </h4>
    <a className="w3-bar-item w3-button w3-hover-black" href="#">
      Link
    </a>
    <a className="w3-bar-item w3-button w3-hover-black" href="#">
      Link
    </a>
    <a className="w3-bar-item w3-button w3-hover-black" href="#">
      Link
    </a>
    <a className="w3-bar-item w3-button w3-hover-black" href="#">
      Link
    </a>
  </nav>
  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-hide-large"
    onclick="w3_close()"
    style={{ cursor: "pointer" }}
    title="close side menu"
    id="myOverlay"
  />
  {/* Main content: shift it to the right by 250 pixels when the sidebar is visible */}
  <div className="w3-main" style={{ marginLeft: 250 }}>
    <div className="w3-row w3-padding-64">
      <div className="w3-twothird w3-container">
        <h1 className="w3-text-teal">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w3-third w3-container">
        <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
        <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
      </div>
    </div>
    <div className="w3-row">
      <div className="w3-twothird w3-container">
        <h1 className="w3-text-teal">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w3-third w3-container">
        <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
        <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
      </div>
    </div>
    <div className="w3-row w3-padding-64">
      <div className="w3-twothird w3-container">
        <h1 className="w3-text-teal">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w3-third w3-container">
        <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
        <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
      </div>
    </div>
    {/* Pagination */}
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a className="w3-button w3-black" href="#">
          1
        </a>
        <a className="w3-button w3-hover-black" href="#">
          2
        </a>
        <a className="w3-button w3-hover-black" href="#">
          3
        </a>
        <a className="w3-button w3-hover-black" href="#">
          4
        </a>
        <a className="w3-button w3-hover-black" href="#">
          5
        </a>
        <a className="w3-button w3-hover-black" href="#">
          »
        </a>
      </div>
    </div>
    <footer id="myFooter">
      <div className="w3-container w3-theme-l2 w3-padding-32">
        <h4>Footer</h4>
      </div>
      <div className="w3-container w3-theme-l1">
        <p>
          Powered by{" "}
          <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
            w3.css
          </a>
        </p>
      </div>
    </footer>
    {/* END MAIN */}
  </div>
</>

  );
}

export default App;
