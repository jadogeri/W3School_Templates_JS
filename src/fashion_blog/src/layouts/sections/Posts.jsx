import React from 'react';

const Posts = () => {
  return (
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
  );
}

export default Posts;
