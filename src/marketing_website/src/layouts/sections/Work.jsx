import React from 'react'
import CustomerCard from '../../components/CustomerCard'

const Work = () => {
  return (
    <section>
          <div className="w3-row-padding w3-padding-64 w3-theme-l1" id="work">
    <div className="w3-quarter">
      <h2>Our Work</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
    <CustomerCard
      src="https://www.w3schools.com/w3images/snow.jpg" alt="Snow"  name="Customer 1"
    />
    <CustomerCard
      src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights" name="Customer 2"
    />
    <CustomerCard
      src="https://www.w3schools.com/w3images/mountains.jpg" alt="Mountains" name="Customer 3"
    />
  </div>
    </section>
  )
}

export default Work