import './App.css';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import Blog from './components/Blog';
import Post from './components/Post';
import Tag from './components/Tag';
import AboutCard from './components/AboutCard';

function App() {
  return (
<>
  {/* w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example */}
  <div className="w3-content" style={{ maxWidth: 1400 }}>
    {/* Header */}
    <Header name="unknown"/>

    {/* Grid */}
    <div className="w3-row">
      {/* Blog entries */}
      <div className="w3-col l8 s12">
        {/* Blog entry */}
        <Blog 
          src="https://www.w3schools.com/w3images/woods.jpg" alt="Nature" heading="TITLE HEADING"
          title="Title" description="description" date="April 7, 2014"
          message="Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
              mi non congue ullam corper. Praesent tincidunt sed tellus ut
              rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
              congue gravida diam non fringilla." count={0}
         />
        <hr />
        {/* Blog entry */}
        <Blog 
          src="https://www.w3schools.com/w3images/bridge.jpg" alt="Norway" heading="BLOG ENTRY"
          title="Title" description="description" date="April 2, 2014"
          message="Mauris neque quam, fermentum ut nisl vitae, convallis maximus
              nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor
              magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies
              mi non congue ullam corper. Praesent tincidunt sed tellus ut
              rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
              congue gravida diam non fringilla." count={2} 
        />
        {/* END BLOG ENTRIES */}
      </div>
      {/* Introduction menu */}
      <div className="w3-col l4">
        {/* About Card */}
        <AboutCard 
          src="https://www.w3schools.com/w3images/avatar_g.jpg" name="My Name"
          description="Just me, myself and I, exploring the universe of uknownment. I
              have a heart of love and a interest of lorem ipsum and mauris
              neque quam blog. I want to share my world with you."
          />
        <hr />
        {/* Posts */}
        <div className="w3-card w3-margin">
          <div className="w3-container w3-padding">
            <h4>Popular Posts</h4>
          </div>
          <ul className="w3-ul w3-hoverable w3-white">
            <Post 
              src="https://www.w3schools.com/w3images/workshop.jpg" alt="Image"
              title="Lorem" description="Sed mattis nunc"
            />
            <Post
              src="https://www.w3schools.com/w3images/gondol.jpg" alt="Image"
              title="Ipsum" description="Praes tinci sed"
            />
            <Post
              src="https://www.w3schools.com/w3images/skies.jpg" alt="Image"
              title="Dorum" description="Ultricies congue"
            
            />
            <Post 
              src="https://www.w3schools.com/w3images/rock.jpg" alt="Image"
              title="Mingsum" description="Lorem ipsum dipsum"
            />
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
              <Tag className="w3-tag w3-black w3-margin-bottom" title="Travel"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="New York"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="London"/>
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom"title="IKEA"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="NORWAY"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom"title="DIY"/>
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="Ideas"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="Baby"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="Family"/>
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="News"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="Clothing"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="Shopping"/>
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="Sports"/>{" "}
              <Tag className="w3-tag w3-light-grey w3-small w3-margin-bottom" title="Games"/>
              
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
  <Footer />

</>

  );
}

export default App;
