import React from 'react'
import Blog from '../components/Blog'
import Tag from '../components/Tags'

const Footer = () => {
  return (
    <footer className="w3-row-padding w3-padding-32">
    <div className="w3-third">
      <h3>FOOTER</h3>
      <p>
        Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum,
        porta lectus vitae, ultricies congue gravida diam non fringilla.
      </p>
      <p>
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
          w3.css
        </a>
      </p>
    </div>
    <div className="w3-third">
      <h3>BLOG POSTS</h3>
      <ul className="w3-ul w3-hoverable">
        <Blog
          src="https://www.w3schools.com/w3images/workshop.jpg"
          title="Lorem" description="Sed mattis nunc"
        />
        <Blog
          src="https://www.w3schools.com/w3images/gondol.jpg"
          title="Ipsum" description="Praes tinci sed"
        />
      </ul>
    </div>
    <div className="w3-third w3-serif">
      <h3>POPULAR TAGS</h3>
      <p>
        <Tag className="w3-tag w3-black w3-margin-bottom" title="Travel"/>{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="New York"/>{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Dinner" />
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Salmon" />{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="France" />{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Drinks" />
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Ideas" />{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Flavors" />{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Cuisine" />
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Chicken" />{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Dressing" />{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Fried" />
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Fish" />{" "}
        <Tag className="w3-tag w3-dark-grey w3-small w3-margin-bottom" title="Duck" />
      </p>
    </div>
  </footer>
  )
}

export default Footer