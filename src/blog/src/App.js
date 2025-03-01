import './App.css';

function App() {
  return (
<>
  {/* w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example */}
  <div className="w3-content" style={{ maxWidth: 1400 }}>
    {/* Header */}
    <header className="w3-container w3-center w3-padding-32">
      <h1>
        <b>MY BLOG</b>
      </h1>
      <p>
        Welcome to the blog of <span className="w3-tag">unknown</span>
      </p>
    </header>
    {/* Grid */}
    <div className="w3-row">
      {/* Blog entries */}
      <div className="w3-col l8 s12">
        {/* Blog entry */}
        <div className="w3-card-4 w3-margin w3-white">
          <img
            src="https://www.w3schools.com/w3images/woods.jpg"
            alt="Nature"
            style={{ width: "100%" }}
          />
          <div className="w3-container">
            <h3>
              <b>TITLE HEADING</b>
            </h3>
            <h5>
              Title description,{" "}
              <span className="w3-opacity">April 7, 2014</span>
            </h5>
          </div>
          <div className="w3-container">
            <p>
              Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
              mi non congue ullam corper. Praesent tincidunt sed tellus ut
              rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
              congue gravida diam non fringilla.
            </p>
            <div className="w3-row">
              <div className="w3-col m8 s12">
                <p>
                  <button className="w3-button w3-padding-large w3-white w3-border">
                    <b>READ MORE »</b>
                  </button>
                </p>
              </div>
              <div className="w3-col m4 w3-hide-small">
                <p>
                  <span className="w3-padding-large w3-right">
                    <b>Comments &nbsp;</b> <span className="w3-tag">0</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Blog entry */}
        <div className="w3-card-4 w3-margin w3-white">
          <img
            src="https://www.w3schools.com/w3images/bridge.jpg"
            alt="Norway"
            style={{ width: "100%" }}
          />
          <div className="w3-container">
            <h3>
              <b>BLOG ENTRY</b>
            </h3>
            <h5>
              Title description,{" "}
              <span className="w3-opacity">April 2, 2014</span>
            </h5>
          </div>
          <div className="w3-container">
            <p>
              Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
              mi non congue ullam corper. Praesent tincidunt sed tellus ut
              rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
              congue gravida diam non fringilla.
            </p>
            <div className="w3-row">
              <div className="w3-col m8 s12">
                <p>
                  <button className="w3-button w3-padding-large w3-white w3-border">
                    <b>READ MORE »</b>
                  </button>
                </p>
              </div>
              <div className="w3-col m4 w3-hide-small">
                <p>
                  <span className="w3-padding-large w3-right">
                    <b>Comments &nbsp;</b> <span className="w3-badge">2</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* END BLOG ENTRIES */}
      </div>
      {/* Introduction menu */}
      <div className="w3-col l4">
        {/* About Card */}
        <div className="w3-card w3-margin w3-margin-top">
          <img src="https://www.w3schools.com/w3images/avatar_g.jpg" style={{ width: "100%" }} />
          <div className="w3-container w3-white">
            <h4>
              <b>My Name</b>
            </h4>
            <p>
              Just me, myself and I, exploring the universe of uknownment. I
              have a heart of love and a interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you.
            </p>
          </div>
        </div>
        <hr />
        {/* Posts */}
        <div className="w3-card w3-margin">
          <div className="w3-container w3-padding">
            <h4>Popular Posts</h4>
          </div>
          <ul className="w3-ul w3-hoverable w3-white">
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/workshop.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Lorem</span>
              <br />
              <span>Sed mattis nunc</span>
            </li>
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/gondol.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Ipsum</span>
              <br />
              <span>Praes tinci sed</span>
            </li>
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/skies.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Dorum</span>
              <br />
              <span>Ultricies congue</span>
            </li>
            <li className="w3-padding-16 w3-hide-medium w3-hide-small">
              <img
                src="https://www.w3schools.com/w3images/rock.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Mingsum</span>
              <br />
              <span>Lorem ipsum dipsum</span>
            </li>
          </ul>
        </div>
        <hr />
        {/* Labels / tags */}
        <div className="w3-card w3-margin">
          <div className="w3-container w3-padding">
            <h4>Tags</h4>
          </div>
          <div className="w3-container w3-white">
            <p>
              <span className="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                New York
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                London
              </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                IKEA
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                NORWAY
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                DIY
              </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Ideas
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Baby
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Family
              </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                News
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Clothing
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Shopping
              </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Sports
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Games
              </span>
            </p>
          </div>
        </div>
        {/* END Introduction Menu */}
      </div>
      {/* END GRID */}
    </div>
    <br />
    {/* END w3-content */}
  </div>
  {/* Footer */}
  <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
    <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
      Previous
    </button>
    <button className="w3-button w3-black w3-padding-large w3-margin-bottom">
      Next »
    </button>
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
