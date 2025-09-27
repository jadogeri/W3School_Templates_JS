import "./App.css"

function App() {
  return (
<>
  {/* Sidebar/menu */}
  <nav
    className="w3-sidebar w3-bar-block w3-black w3-animate-right w3-top w3-text-light-grey w3-large"
    style={{
      zIndex: 3,
      width: 250,
      fontWeight: "bold",
      display: "none",
      right: 0
    }}
    id="mySidebar"
  >
    <a
      href="javascript:void()"
      onclick="w3_close()"
      className="w3-bar-item w3-button w3-center w3-padding-32"
    >
      CLOSE
    </a>
    <a
      href="#"
      onclick="w3_close()"
      className="w3-bar-item w3-button w3-center w3-padding-16"
    >
      PORTFOLIO
    </a>
    <a
      href="#about"
      onclick="w3_close()"
      className="w3-bar-item w3-button w3-center w3-padding-16"
    >
      ABOUT ME
    </a>
    <a
      href="#contact"
      onclick="w3_close()"
      className="w3-bar-item w3-button w3-center w3-padding-16"
    >
      CONTACT
    </a>
  </nav>
  {/* Top menu on small screens */}
  <header className="w3-container w3-top w3-white w3-xlarge w3-padding-16">
    <span className="w3-left w3-padding">SOME NAME</span>
    <a
      href="javascript:void(0)"
      className="w3-right w3-button w3-white"
      onclick="w3_open()"
    >
      ☰
    </a>
  </header>
  {/* Overlay effect when opening sidebar on small screens */}
  <div
    className="w3-overlay w3-animate-opacity"
    onclick="w3_close()"
    style={{ cursor: "pointer" }}
    title="close side menu"
    id="myOverlay"
  />
  {/* !PAGE CONTENT! */}
  <div className="w3-main w3-content" style={{ maxWidth: 1600, marginTop: 83 }}>
    {/* Photo grid */}
    <div className="w3-row w3-grayscale-min">
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/girl.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="Canoeing again"
        />
        <img
          src="https://www.w3schools.com/w3images/boy.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="Quiet day at the beach. Cold, but beautiful"
        />
        <img
          src="https://www.w3schools.com/w3images/girl.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="The Beach. Me. Alone. Beautiful"
        />
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/girl_train.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="A girl, and a train passing"
        />
        <img
          src="https://www.w3schools.com/w3images/man_bench.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="Waiting for the bus in the desert"
        />
        <img
          src="https://www.w3schools.com/w3images/natureboy.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="Nature again.. At its finest!"
        />
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/man_bench.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="Waiting for the bus in the desert"
        />
        <img
          src="https://www.w3schools.com/w3images/girl_mountain.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="What a beautiful scenery this sunset"
        />
        <img
          src="https://www.w3schools.com/w3images/closegirl.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="The Beach. Me. Alone. Beautiful"
        />
      </div>
      <div className="w3-quarter">
        <img
          src="https://www.w3schools.com/w3images/natureboy.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="A boy surrounded by beautiful nature"
        />
        <img
          src="https://www.w3schools.com/w3images/girl_train.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="A girl, and a train passing"
        />
        <img
          src="https://www.w3schools.com/w3images/boy.jpg"
          style={{ width: "100%" }}
          onclick="onClick(this)"
          alt="Quiet day at the beach. Cold, but beautiful"
        />
      </div>
    </div>
    {/* Pagination */}
    <div className="w3-center w3-padding-32">
      <div className="w3-bar">
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          «
        </a>
        <a href="#" className="w3-bar-item w3-black w3-button">
          1
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          2
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          3
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          4
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hover-black">
          »
        </a>
      </div>
    </div>
    {/* Modal for full size images on click*/}
    <div
      id="modal01"
      className="w3-modal w3-black"
      style={{ paddingTop: 0 }}
      onclick="this.style.display='none'"
    >
      <span className="w3-button w3-black w3-xlarge w3-display-topright">
        ×
      </span>
      <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
        <img id="img01" className="w3-image" />
        <p id="caption" />
      </div>
    </div>
    {/* About section */}
    <div
      className="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32"
      id="about"
    >
      <h4>
        <b>About Me</b>
      </h4>
      <img
        src="https://www.w3schools.com/w3images/avatar_hat.jpg"
        alt="Me"
        className="w3-image w3-padding-32"
        width={600}
        height={650}
      />
      <div className="w3-content w3-justify" style={{ maxWidth: 600 }}>
        <h4>My Name</h4>
        <p>
          Some text about me. I love taking photos of PEOPLE. I am lorem ipsum
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>mail: example@example.com</p>
        <p>tel: 5353 35531</p>
        <hr className="w3-opacity" />
        <h4 className="w3-padding-16">Technical Skills</h4>
        <p className="w3-wide">Photography</p>
        <div className="w3-white">
          <div
            className="w3-container w3-padding-small w3-center w3-grey"
            style={{ width: "95%" }}
          >
            95%
          </div>
        </div>
        <p className="w3-wide">Web Design</p>
        <div className="w3-white">
          <div
            className="w3-container w3-padding-small w3-center w3-grey"
            style={{ width: "85%" }}
          >
            85%
          </div>
        </div>
        <p className="w3-wide">Photoshop</p>
        <div className="w3-white">
          <div
            className="w3-container w3-padding-small w3-center w3-grey"
            style={{ width: "80%" }}
          >
            80%
          </div>
        </div>
        <p>
          <button className="w3-button w3-light-grey w3-padding-large w3-margin-top w3-margin-bottom w3-hover-black">
            Download Resume
          </button>
        </p>
        <hr className="w3-opacity" />
        <h4 className="w3-padding-16">How much I charge</h4>
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
          <div className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-center">
              <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">5GB Storage</li>
              <li className="w3-padding-16">Mail Support</li>
              <li className="w3-padding-16">
                <h2>$ 10</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
          <div className="w3-half">
            <ul className="w3-ul w3-white w3-center">
              <li className="w3-black w3-xlarge w3-padding-32">Pro</li>
              <li className="w3-padding-16">Web Design</li>
              <li className="w3-padding-16">Photography</li>
              <li className="w3-padding-16">50GB Storage</li>
              <li className="w3-padding-16">Endless Support</li>
              <li className="w3-padding-16">
                <h2>$ 25</h2>
                <span className="w3-opacity">per month</span>
              </li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* Contact section */}
    <div
      className="w3-container w3-light-grey w3-padding-32 w3-padding-large"
      id="contact"
    >
      <div className="w3-content" style={{ maxWidth: 600 }}>
        <h4 className="w3-center">
          <b>Contact Me</b>
        </h4>
        <p>
          Do you want me to photograph you? Fill out the form and fill me in
          with the details :) I love meeting new people!
        </p>
        <form action="/action_page.php" target="_blank">
          <div className="w3-section">
            <label>Name</label>
            <input
              className="w3-input w3-border"
              type="text"
              name="Name"
              required=""
            />
          </div>
          <div className="w3-section">
            <label>Email</label>
            <input
              className="w3-input w3-border"
              type="text"
              name="Email"
              required=""
            />
          </div>
          <div className="w3-section">
            <label>Message</label>
            <input
              className="w3-input w3-border"
              type="text"
              name="Message"
              required=""
            />
          </div>
          <button
            type="submit"
            className="w3-button w3-block w3-black w3-margin-bottom"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
    {/* Footer */}
    <footer className="w3-container w3-padding-32 w3-grey">
      <div className="w3-row-padding">
        <div className="w3-third">
          <h3>INFO</h3>
          <p>
            Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
        </div>
        <div className="w3-third">
          <h3>BLOG POSTS</h3>
          <ul className="w3-ul">
            <li className="w3-padding-16 w3-hover-black">
              <img
                src="https://www.w3schools.com/w3images/workshop.jpg"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Lorem</span>
              <br />
              <span>Sed mattis nunc</span>
            </li>
            <li className="w3-padding-16 w3-hover-black">
              <img
                src="https://www.w3schools.com/w3images/gondol.jpg"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Ipsum</span>
              <br />
              <span>Praes tinci sed</span>
            </li>
          </ul>
        </div>
        <div className="w3-third">
          <h3>POPULAR TAGS</h3>
          <p>
            <span className="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              New York
            </span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              London
            </span>
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              IKEA
            </span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              NORWAY
            </span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              DIY
            </span>
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              Ideas
            </span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              Baby
            </span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              Family
            </span>
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              News
            </span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              Clothing
            </span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              Shopping
            </span>
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              Sports
            </span>{" "}
            <span className="w3-tag w3-dark-grey w3-small w3-margin-bottom">
              Games
            </span>
          </p>
        </div>
      </div>
    </footer>
    <div className="w3-black w3-center w3-padding-24">
      Powered by{" "}
      <a
        href="https://www.w3schools.com/w3css/default.asp"
        title="W3.CSS"
        target="_blank"
        className="w3-hover-opacity"
      >
        w3.css
      </a>
    </div>
    {/* End page content */}
  </div>
</>

  );
}

export default App;
