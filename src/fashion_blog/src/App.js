import './App.css';
import Footer from './layouts/Footer';
import NavBar from './layouts/NavBar';

function App() {
  return (
<>
  {/* Navigation bar with social media icons */}
  <NavBar />
  
  {/* w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example */}
  <div className="w3-content" style={{ maxWidth: 1600 }}>
    {/* Header */}
    <header className="w3-container w3-center w3-padding-48 w3-white">
      <h1 className="w3-xxxlarge">
        <b>JANE BLOGLIFE</b>
      </h1>
      <h6>
        Welcome to the blog of <span className="w3-tag">Jane's world</span>
      </h6>
    </header>
    {/* Image header */}
    <header className="w3-display-container w3-wide" id="home">
      <img
        className="w3-image"
        src="https://www.w3schools.com/w3images/jane.jpg"
        alt="Fashion Blog"
        width={1600}
        height={1060}
      />
      <div className="w3-display-left w3-padding-large">
        <h1 className="w3-text-white">Jane's</h1>
        <h1 className="w3-jumbo w3-text-white w3-hide-small">
          <b>FASHION BLOG</b>
        </h1>
        <h6>
          <button
            className="w3-button w3-white w3-padding-large w3-large w3-opacity w3-hover-opacity-off"
            onclick="document.getElementById('subscribe').style.display='block'"
          >
            SUBSCRIBE
          </button>
        </h6>
      </div>
    </header>
    {/* Grid */}
    <div className="w3-row w3-padding w3-border">
      {/* Blog entries */}
      <div className="w3-col l8 s12">
        {/* Blog entry */}
        <div className="w3-container w3-white w3-margin w3-padding-large">
          <div className="w3-center">
            <h3>TITLE HEADING</h3>
            <h5>
              Title description, <span className="w3-opacity">May 2, 2016</span>
            </h5>
          </div>
          <div className="w3-justify">
            <img
              src="https://www.w3schools.com/w3images/girl_hat.jpg"
              alt="Girl Hat"
              style={{ width: "100%" }}
              className="w3-padding-16"
            />
            <p>
              <strong>More Hats!</strong> I am crazy about hats these days. Some
              text about this blog entry. Fashion fashion and mauris neque quam,
              fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc
              id lorem euismod placerat. Vivamus porttitor magna enim, ac
              accumsan tortor cursus at. Phasellus sed ultricies mi non congue
              ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae
              justo condimentum, porta lectus vitae, ultricies congue gravida
              diam non fringilla.
            </p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco.
            </p>
            <p className="w3-left">
              <button
                className="w3-button w3-white w3-border"
                onclick="likeFunction(this)"
              >
                <b>
                  <i className="fa fa-thumbs-up" /> Like
                </b>
              </button>
            </p>
            <p className="w3-right">
              <button
                className="w3-button w3-black"
                onclick="myFunction('demo1')"
                id="myBtn"
              >
                <b>Replies &nbsp;</b> <span className="w3-tag w3-white">1</span>
              </button>
            </p>
            <p className="w3-clear" />
            <div
              className="w3-row w3-margin-bottom"
              id="demo1"
              style={{ display: "none" }}
            >
              <hr />
              <div className="w3-col l2 m3">
                <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" style={{ width: 90 }} />
              </div>
              <div className="w3-col l10 m9">
                <h4>
                  George{" "}
                  <span className="w3-opacity w3-medium">
                    May 3, 2015, 6:32 PM
                  </span>
                </h4>
                <p>Great blog post! Following</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Blog entry */}
        <div className="w3-container w3-white w3-margin w3-padding-large">
          <div className="w3-center">
            <h3>TITLE HEADING</h3>
            <h5>
              Title description,{" "}
              <span className="w3-opacity">April 23, 2016</span>
            </h5>
          </div>
          <div className="w3-justify">
            <img
              src="https://www.w3schools.com/w3images/man_hat.jpg"
              alt="Men in Hats"
              style={{ width: "100%" }}
              className="w3-padding-16"
            />
            <p>
              <strong>Hats!</strong> The trend this summer is hats for men!
            </p>
            <p>
              Some text about this blog entry. Fashion fashion and mauris neque
              quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis
              nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
              accumsan tortor cursus at. Phasellus sed ultricies mi non congue
              ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae
              justo condimentum, porta lectus vitae, ultricies congue gravida
              diam non fringilla.
            </p>
            <p className="w3-left">
              <button
                className="w3-button w3-white w3-border"
                onclick="likeFunction(this)"
              >
                <b>
                  <i className="fa fa-thumbs-up" /> Like
                </b>
              </button>
            </p>
            <p className="w3-right">
              <button
                className="w3-button w3-black"
                onclick="myFunction('demo2')"
              >
                <b>Replies &nbsp;</b> <span className="w3-tag w3-white">2</span>
              </button>
            </p>
            <p className="w3-clear" />
            {/* Example of comment field */}
            <div id="demo2" style={{ display: "none" }}>
              <div className="w3-row">
                <hr />
                <div className="w3-col l2 m3">
                  <img src="https://www.w3schools.com/w3images/girl_train.jpg" style={{ width: 90 }} />
                </div>
                <div className="w3-col l10 m9">
                  <h4>
                    Amber{" "}
                    <span className="w3-opacity w3-medium">
                      April 26, 2015, 10:52 PM
                    </span>
                  </h4>
                  <p>
                    Love your blog page! Simply the best! Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <br />
                </div>
              </div>
              <div className="w3-row w3-margin-bottom">
                <div className="w3-col l2 m3">
                  <img src="https://www.w3schools.com/w3images/girl.jpg" style={{ width: 90 }} />
                </div>
                <div className="w3-col l10 m9">
                  <h4>
                    Angie{" "}
                    <span className="w3-opacity w3-medium">
                      April 23, 2015, 9:12 PM
                    </span>
                  </h4>
                  <p>Love hats!!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog entry */}
        <div className="w3-container w3-white w3-margin w3-padding-large">
          <div className="w3-center">
            <h3>TITLE HEADING</h3>
            <h5>
              Title description,{" "}
              <span className="w3-opacity">April 7, 2016</span>
            </h5>
          </div>
          <div className="w3-justify">
            <img
              src="https://www.w3schools.com/w3images/runway.jpg"
              alt="Runway"
              style={{ width: "100%" }}
              className="w3-padding-16"
            />
            <p>
              <strong>Dont miss!</strong> The runway in New York City this
              weekend is gonna be legendary!
            </p>
            <p>
              Some text about this blog entry. Fashion fashion and mauris neque
              quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis
              nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
              accumsan tortor cursus at. Phasellus sed ultricies mi non congue
              ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae
              justo condimentum, porta lectus vitae, ultricies congue gravida
              diam non fringilla.
            </p>
            <p className="w3-left">
              <button
                className="w3-button w3-white w3-border"
                onclick="likeFunction(this)"
              >
                <b>
                  <i className="fa fa-thumbs-up" /> Like
                </b>
              </button>
            </p>
            <p className="w3-right">
              <button
                className="w3-button w3-black"
                onclick="myFunction('demo3')"
              >
                <b>Replies &nbsp;</b> <span className="w3-tag w3-white">3</span>
              </button>
            </p>
            <p className="w3-clear" />
            {/* Example of comment field */}
            <div id="demo3" style={{ display: "none" }}>
              <hr />
              <div className="w3-row w3-margin-bottom">
                <div className="w3-col l2 m3">
                  <img
                    src="https://www.w3schools.com/w3images/girl_mountain.jpg"
                    style={{ width: 90 }}
                  />
                </div>
                <div className="w3-col l10 m9">
                  <h4>
                    Jane{" "}
                    <span className="w3-opacity w3-medium">
                      April 10, 2015, 7:22 PM
                    </span>
                  </h4>
                  <p>That was a great runway show! Thanks for everything.</p>
                </div>
              </div>
              <div className="w3-row w3-margin-bottom">
                <div className="w3-col l2 m3">
                  <img src="https://www.w3schools.com/w3images/boy.jpg" style={{ width: 90 }} />
                </div>
                <div className="w3-col l10 m9">
                  <h4>
                    John{" "}
                    <span className="w3-opacity w3-medium">
                      April 8, 2015, 10:32 PM
                    </span>
                  </h4>
                  <p>
                    Keep up the GREAT work! I am cheering for you!! Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt.
                  </p>
                </div>
              </div>
              <div className="w3-row w3-margin-bottom">
                <div className="w3-col l2 m3">
                  <img src="https://www.w3schools.com/w3images/girl_hood.jpg" style={{ width: 90 }} />
                </div>
                <div className="w3-col l10 m9">
                  <h4>
                    Anja{" "}
                    <span className="w3-opacity w3-medium">
                      April 7, 2015, 9:12 PM
                    </span>
                  </h4>
                  <p>Cant wait for the runway to start!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END BLOG ENTRIES */}
      </div>
      {/* About/Information menu */}
      <div className="w3-col l4">
        {/* About Card */}
        <div className="w3-white w3-margin">
          <img
            src="https://www.w3schools.com/w3images/avatar_girl2.jpg"
            alt="Jane"
            style={{ width: "100%" }}
            className="w3-grayscale"
          />
          <div className="w3-container w3-black">
            <h4>My Name</h4>
            <p>
              Just me, myself and I, exploring the universe of uknownment. I
              have a heart of love and a interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you.
            </p>
          </div>
        </div>
        <hr />
        {/* Posts */}
        <div className="w3-white w3-margin">
          <div className="w3-container w3-padding w3-black">
            <h4>Popular Posts</h4>
          </div>
          <ul className="w3-ul w3-hoverable w3-white">
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Denim</span>
              <br />
              <span>Sed mattis nunc</span>
            </li>
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/bandmember.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Sweaters</span>
              <br />
              <span>Praes tinci sed</span>
            </li>
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/workshop.jpg"
                alt="Image"
                className="w3-left w3-margin-right"
                style={{ width: 50 }}
              />
              <span className="w3-large">Workshop</span>
              <br />
              <span>Ultricies congue</span>
            </li>
            <li className="w3-padding-16">
              <img
                src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
                alt="Image"
                className="w3-left w3-margin-right w3-sepia"
                style={{ width: 50 }}
              />
              <span className="w3-large">Trends</span>
              <br />
              <span>Lorem ipsum dipsum</span>
            </li>
          </ul>
        </div>
        <hr />
        {/* Advertising */}
        <div className="w3-white w3-margin">
          <div className="w3-container w3-padding w3-black">
            <h4>Advertise</h4>
          </div>
          <div className="w3-container w3-white">
            <div
              className="w3-container w3-display-container w3-light-grey w3-section"
              style={{ height: 200 }}
            >
              <span className="w3-display-middle">Your AD Here</span>
            </div>
          </div>
        </div>
        <hr />
        {/* Tags */}
        <div className="w3-white w3-margin">
          <div className="w3-container w3-padding w3-black">
            <h4>Tags</h4>
          </div>
          <div className="w3-container w3-white">
            <p>
              <span className="w3-tag w3-black w3-margin-bottom">Fashion</span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                New York
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                London
              </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Hats
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Norway
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Sweaters
              </span>
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Ideas
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Deals
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Accessories
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
                Jeans
              </span>{" "}
              <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                Trends
              </span>
            </p>
          </div>
        </div>
        <hr />
        {/* Inspiration */}
        <div className="w3-white w3-margin">
          <div className="w3-container w3-padding w3-black">
            <h4>Inspiration</h4>
          </div>
          <div className="w3-row-padding w3-white">
            <div className="w3-col s6">
              <p>
                <img
                  src="https://www.w3schools.com/w3images/jeans.jpg"
                  alt="Jeans"
                  style={{ width: "100%" }}
                />
              </p>
              <p>
                <img
                  src="https://www.w3schools.com/w3images/team1.jpg"
                  alt="Jeans"
                  style={{ width: "100%" }}
                />
              </p>
            </div>
            <div className="w3-col s6">
              <p>
                <img
                  src="https://www.w3schools.com/w3images/avatar_hat.jpg"
                  alt="Men in Hats"
                  style={{ width: "100%" }}
                  className="w3-grayscale"
                />
              </p>
              <p>
                <img
                  src="https://www.w3schools.com/w3images/team4.jpg"
                  alt="Jeans"
                  style={{ width: "100%" }}
                />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="w3-white w3-margin">
          <div className="w3-container w3-padding w3-black">
            <h4>Follow Me</h4>
          </div>
          <div className="w3-container w3-xlarge w3-padding">
            <i className="fa fa-facebook-official w3-hover-opacity" />
            <i className="fa fa-instagram w3-hover-opacity" />
            <i className="fa fa-snapchat w3-hover-opacity" />
            <i className="fa fa-pinterest-p w3-hover-opacity" />
            <i className="fa fa-twitter w3-hover-opacity" />
            <i className="fa fa-linkedin w3-hover-opacity" />
          </div>
        </div>
        <hr />
        {/* Subscribe */}
        <div className="w3-white w3-margin">
          <div className="w3-container w3-padding w3-black">
            <h4>Subscribe</h4>
          </div>
          <div className="w3-container w3-white">
            <p>
              Enter your e-mail below and get notified on the latest blog posts.
            </p>
            <p>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Enter e-mail"
                style={{ width: "100%" }}
              />
            </p>
            <p>
              <button
                type="button"
                onclick="document.getElementById('subscribe').style.display='block'"
                className="w3-button w3-block w3-red"
              >
                Subscribe
              </button>
            </p>
          </div>
        </div>
        {/* END About/Intro Menu */}
      </div>
      {/* END GRID */}
    </div>
    {/* END w3-content */}
  </div>
  {/* Subscribe Modal */}
  <div id="subscribe" className="w3-modal w3-animate-opacity">
    <div className="w3-modal-content" style={{ padding: 32 }}>
      <div className="w3-container w3-white">
        <i
          onclick="document.getElementById('subscribe').style.display='none'"
          className="fa fa-remove w3-transparent w3-button w3-xlarge w3-right"
        />
        <h2 className="w3-wide">SUBSCRIBE</h2>
        <p>
          Join my mailing list to receive updates on the latest blog posts and
          other things.
        </p>
        <p>
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Enter e-mail"
          />
        </p>
        <button
          type="button"
          className="w3-button w3-block w3-padding-large w3-red w3-margin-bottom"
          onclick="document.getElementById('subscribe').style.display='none'"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;



//document.getElementById("myBtn").click();
