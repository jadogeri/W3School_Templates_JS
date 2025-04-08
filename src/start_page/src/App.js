import './App.css';

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
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
        '\nbody,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif}\n.w3-bar,h1,button {font-family: "Montserrat", sans-serif}\n.fa-anchor,.fa-coffee {font-size:200px}\n'
    }}
  />
  {/* Navbar */}
  <div className="w3-top">
    <div className="w3-bar w3-red w3-card w3-left-align w3-large">
      <a
        className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red"
        href="javascript:void(0);"
        onclick="myFunction()"
        title="Toggle Navigation Menu"
      >
        <i className="fa fa-bars" />
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large w3-white">
        Home
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        Link 1
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        Link 2
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        Link 3
      </a>
      <a
        href="#"
        className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
      >
        Link 4
      </a>
    </div>
    {/* Navbar on small screens */}
    <div
      id="navDemo"
      className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large"
    >
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        Link 1
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        Link 2
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        Link 3
      </a>
      <a href="#" className="w3-bar-item w3-button w3-padding-large">
        Link 4
      </a>
    </div>
  </div>
  {/* Header */}
  <header
    className="w3-container w3-red w3-center"
    style={{ padding: "128px 16px" }}
  >
    <h1 className="w3-margin w3-jumbo">START PAGE</h1>
    <p className="w3-xlarge">Template by w3.css</p>
    <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">
      Get Started
    </button>
  </header>
  {/* First Grid */}
  <div className="w3-row-padding w3-padding-64 w3-container">
    <div className="w3-content">
      <div className="w3-twothird">
        <h1>Lorem Ipsum</h1>
        <h5 className="w3-padding-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h5>
        <p className="w3-text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
      <div className="w3-third w3-center">
        <i className="fa fa-anchor w3-padding-64 w3-text-red" />
      </div>
    </div>
  </div>
  {/* Second Grid */}
  <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
    <div className="w3-content">
      <div className="w3-third w3-center">
        <i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right" />
      </div>
      <div className="w3-twothird">
        <h1>Lorem Ipsum</h1>
        <h5 className="w3-padding-32">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h5>
        <p className="w3-text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </div>
  </div>
  <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 className="w3-margin w3-xlarge">Quote of the day: live life</h1>
  </div>
  {/* Footer */}
  <footer className="w3-container w3-padding-64 w3-center w3-opacity">
    <div className="w3-xlarge w3-padding-32">
      <i className="fa fa-facebook-official w3-hover-opacity" />
      <i className="fa fa-instagram w3-hover-opacity" />
      <i className="fa fa-snapchat w3-hover-opacity" />
      <i className="fa fa-pinterest-p w3-hover-opacity" />
      <i className="fa fa-twitter w3-hover-opacity" />
      <i className="fa fa-linkedin w3-hover-opacity" />
    </div>
    <p>
      Powered by{" "}
      <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
        w3.css
      </a>
    </p>
  </footer>
</>

  );
}

export default App;
