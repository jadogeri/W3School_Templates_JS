import React from 'react'

const Blog = ({
    src,
    title,
    description
}) => {
  return (
    <li className="w3-padding-16">
        <img
        src={src}
        className="w3-left w3-margin-right"
        style={{ width: 50 }}
        />
        <span className="w3-large">{title}</span>
        <br />
        <span>{description}</span>
    </li>
  )
}

export default Blog