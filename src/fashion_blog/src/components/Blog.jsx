import React from 'react'
import CommentCard from './CommentCard'
import { likeFunction } from '../utils/likeFunction'
import { myFunction} from '../utils/myFunction'

const Blog = (
    heading,
    description,
    date,
    src,
    alt,
    paragraph1,
    paragraph2,
    comments,
    id

) => {
  return (
    <div className="w3-container w3-white w3-margin w3-padding-large">
    <div className="w3-center">
      <h3>{heading}</h3>
      <h5>
        {description},{" "} <span className="w3-opacity">{date}</span>
      </h5>
    </div>
    <div className="w3-justify">
      <img
        src={src}
        alt={alt}
        style={{ width: "100%" }}
        className="w3-padding-16"
      />
      {paragraph1}
      {paragraph2}

      <p className="w3-left">
        <button
          className="w3-button w3-white w3-border"
          onClick={(event)=>{likeFunction(event)}}
        >
          <b>
            <i className="fa fa-thumbs-up" /> Like
          </b>
        </button>
      </p>
      <p className="w3-right">
        <button
          className="w3-button w3-black"
          onClick={()=>{myFunction('demo1')}}
          id="myBtn"
        >
          <b>Replies &nbsp;</b> <span className="w3-tag w3-white">{comments.length}</span>
        </button>
      </p>
      <p className="w3-clear" />

      {
        comments.map((comment, index)=>{
            return <CommentCard 
                        name={comment.name} id={id} key={index}
                        date={comment.date} src={comment.src} message={comment.message}
                    />
                })
      }

    </div>
  </div>
  )
}

export default Blog