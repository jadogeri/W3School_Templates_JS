import './App.css';

import SideBar from './layouts/SideBar';
import NavBar from './layouts/NavBar';
import OverLay from './components/OverLay';
import MainContent from './layouts/MainContent';

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
    <NavBar />
  {/* Sidebar */}
  <SideBar />
 
  {/* Overlay effect when opening sidebar on small screens */}
<OverLay />
  {/* Main content: shift it to the right by 250 pixels when the sidebar is visible */}

<MainContent />
</>

  );
}

export default App;
