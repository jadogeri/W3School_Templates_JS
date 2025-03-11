import React from 'react';
import Post from '../../components/Post';

const Posts = () => {
  return (
    <div className="w3-white w3-margin">
    <div className="w3-container w3-padding w3-black">
      <h4>Popular Posts</h4>
    </div>
    <ul className="w3-ul w3-hoverable w3-white">
      <Post 
        src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
        name="Denim" title="Sed mattis nunc"
      />
      <Post 
        src="https://www.w3schools.com/w3images/bandmember.jpg"
        name="Sweaters" title="Praes tinci sed"
      />
      <Post 
        src="https://www.w3schools.com/w3images/workshop.jpg"
        name="Workshop"  title="Ultricies congue"
      />
      <Post 
        src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
        name="Trends"  title="Lorem ipsum dipsum"
      />
    </ul>
  </div>
  );
}

export default Posts;
