import React from 'react'

const SlideShowController = ({
    plusDivs,
    currentDiv
}) => {
  return (
     <div className="w3-container w3-dark-grey w3-padding w3-xlarge">
        <div className="w3-left" onClick={()=>{plusDivs(-1)}}>
          <i className="fa fa-arrow-circle-left w3-hover-text-teal" />
        </div>
        <div className="w3-right" onClick={()=>{plusDivs(1)}}>
          <i className="fa fa-arrow-circle-right w3-hover-text-teal" />
        </div>
        <div className="w3-center">
          <span
            className="w3-tag demodots w3-border w3-transparent w3-hover-white"
            onClick={()=>{currentDiv(1)}}
          />
          <span
            className="w3-tag demodots w3-border w3-transparent w3-hover-white"
            onClick={()=>{currentDiv(2)}}
          />
          <span
            className="w3-tag demodots w3-border w3-transparent w3-hover-white"
            onClick={()=>{currentDiv(3)}}
          />
        </div>
      </div>
  )
}

export default SlideShowController