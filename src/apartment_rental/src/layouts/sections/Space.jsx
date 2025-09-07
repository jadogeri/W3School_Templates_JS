import React from 'react'

const Space = () => {
  return (
    <section>
    <h4>
        <strong>The space</strong>
      </h4>
      <div className="w3-row w3-large">
        <div className="w3-col s6">
          <p>
            <i className="fa fa-fw fa-male" /> Max people: 4
          </p>
          <p>
            <i className="fa fa-fw fa-bath" /> Bathrooms: 2
          </p>
          <p>
            <i className="fa fa-fw fa-bed" /> Bedrooms: 1
          </p>
        </div>
        <div className="w3-col s6">
          <p>
            <i className="fa fa-fw fa-clock-o" /> Check In: After 3PM
          </p>
          <p>
            <i className="fa fa-fw fa-clock-o" /> Check Out: 12PM
          </p>
        </div>
      </div> 
    </section>
  )
}

export default Space