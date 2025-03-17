import React from 'react';
import Blog from '../../components/Blog';

const BlogEntries = () => {
  const commentArray1=[

  ]
  return (
    <div className="w3-col l8 s12">
    {/* Blog entry */}
    <Blog
      comments={commentArray1} heading="TITLE HEADING"
      description="Title description" date="May 2, 2016"
      src="https://www.w3schools.com/w3images/girl_hat.jpg"
      alt="Girl Hat"
      paragraph1={ <p>
        <strong>More Hats!</strong> I am crazy about hats these days. Some
        text about this blog entry. Fashion fashion and mauris neque quam,
        fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc
        id lorem euismod placerat. Vivamus porttitor magna enim, ac
        accumsan tortor cursus at. Phasellus sed ultricies mi non congue
        ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae
        justo condimentum, porta lectus vitae, ultricies congue gravida
        diam non fringilla.
      </p>}
      paragraph2={
        <p>
        Sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco.
      </p>

      }
      
      
    />

 


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
  );
}

export default BlogEntries;
