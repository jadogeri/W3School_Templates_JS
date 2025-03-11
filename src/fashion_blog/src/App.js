import './App.css';
import SubscribeModal from './components/SubscribeModal';
import Banner from './layouts/Banner';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import NavBar from './layouts/NavBar';
import Advertising from './layouts/sections/Advertising';
import BlogEntries from './layouts/sections/BlogEntries';
import Follow from './layouts/sections/Follow';
import Inspiration from './layouts/sections/Inspiration';
import Posts from './layouts/sections/Posts';
import Subscribe from './layouts/sections/Subscribe';
import Tags from './layouts/sections/Tags';
import About from './layouts/sections/About';

function App() {
  return (
<>
  {/* Navigation bar with social media icons */}
  <NavBar />
  
  {/* w3-content defines a container for fixed size centered content, 
and is wrapped around the whole page content, except for the footer in this example */}
  <div className="w3-content" style={{ maxWidth: 1600 }}>
    {/* Header */}
    <Header company="JANE BLOGLIFE" name="Jane's world"
    />
    {/* Image header */}
    <Banner 
      src="https://www.w3schools.com/w3images/jane.jpg" alt="Fashion Blog"
    />

    {/* Grid */}
    <div className="w3-row w3-padding w3-border">
      {/* Blog entries */}
      {/* #TODO BLOG ENTRIES */}
      <BlogEntries />

      {/* About/Information menu */}
      <div className="w3-col l4">
        {/* About Card */}
        <About
          src="https://www.w3schools.com/w3images/avatar_girl2.jpg" alt="Jane" title="My Name"
          description="Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a 
                       interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
       />
        <hr />
        {/* Posts */}
        <Posts />

        <hr />
        {/* Advertising */}
        <Advertising />

        <hr />
        {/* Tags */}
        <Tags />

        <hr />
        {/* Inspiration */}
        <Inspiration />
 
        <hr />
        {/* Follow */}

        <Follow />
 
        <hr />
        {/* Subscribe */}
        <Subscribe />
        {/* END About/Intro Menu */}
      </div>
      {/* END GRID */}
    </div>
    {/* END w3-content */}
  </div>
  {/* Subscribe Modal */}
  <SubscribeModal />
 
  {/* Footer */}
  <Footer />

</>

  );
}

export default App;



//document.getElementById("myBtn").click();
