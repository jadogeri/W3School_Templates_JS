import Footer from './layouts/Footer';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import About from './layouts/sections/About';
import Contact from './layouts/sections/Contact';
import Menu from './layouts/sections/Menu';

function App() {
  return (
<>
  <title>W3.CSS Template</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Inconsolata"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\nbody, html {\n  height: 100%;\n  font-family: "Inconsolata", sans-serif;\n}\n\n.bgimg {\n  background-position: center;\n  background-size: cover;\n  background-image: url("https://www.w3schools.com/w3images/coffeehouse.jpg");\n  min-height: 75%;\n}\n\n.menu {\n  display: none;\n}\n'
    }}
  />
  {/* Links (sit on top) */}
  <NavBar />

  {/* Header with image */}
  <Header />

  {/* Add a background color and large text to the whole page */}
  <div className="w3-sand w3-grayscale w3-large">
    {/* About Container */}
    <About />
    {/* Menu Container */}
    <Menu />

    {/* Contact/Area Container */}
    <Contact />

    {/* End page content */}
  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;
