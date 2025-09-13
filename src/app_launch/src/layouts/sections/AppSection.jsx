import React from 'react'

const AppSection = () => {
  return (
    <section>
         <div className="w3-padding-64 w3-white">
    <div className="w3-row-padding">
      <div className="w3-col l8 m6">
        <h1 className="w3-jumbo">
          <b>The App</b>
        </h1>
        <h1 className="w3-xxxlarge w3-text-green">
          <b>Why buy it?</b>
        </h1>
        <p>
          <span className="w3-xlarge">Take photos like a pro.</span> You should
          buy this app because lorem ipsum consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <button
          className="w3-button w3-light-grey w3-padding-large w3-section w3-hide-small"
          onClick={()=>{document.getElementById('download').style.display='block'}}
        >
          <i className="fa fa-download" /> Download Application
        </button>
        <p>
          Available for <i className="fa fa-android w3-xlarge w3-text-green" />{" "}
          <i className="fa fa-apple w3-xlarge" />{" "}
          <i className="fa fa-windows w3-xlarge w3-text-blue" />
        </p>
      </div>
      <div className="w3-col l4 m6">
        <img
          src="https://www.w3schools.com/w3images/img_app.jpg"
          className="w3-image w3-right w3-hide-small"
          width={335}
          height={471}
        />
        <div className="w3-center w3-hide-large w3-hide-medium">
          <button
            className="w3-button w3-block w3-padding-large"
            onClick={()=>{document.getElementById('download').style.display='block'}}
          >
            <i className="fa fa-download" /> Download Application
          </button>
          <img
            src="https://www.w3schools.com/w3images/img_app.jpg"
            className="w3-image w3-margin-top"
            width={335}
            height={471}
          />
        </div>
      </div>
    </div>
  </div>
    </section>
  )
}

export default AppSection