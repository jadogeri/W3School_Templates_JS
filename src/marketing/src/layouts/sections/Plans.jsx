import React from 'react'

const Plans = () => {
  return (
    <section>
           <div className="w3-row-padding" id="plans">
      <div className="w3-center w3-padding-64">
        <h3>Pricing Plans</h3>
        <p>Choose a pricing plan that fits your needs.</p>
      </div>
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-center w3-hover-shadow">
          <li className="w3-black w3-xlarge w3-padding-32">Basic</li>
          <li className="w3-padding-16">
            <b>10GB</b> Storage
          </li>
          <li className="w3-padding-16">
            <b>10</b> Emails
          </li>
          <li className="w3-padding-16">
            <b>10</b> Domains
          </li>
          <li className="w3-padding-16">
            <b>Endless</b> Support
          </li>
          <li className="w3-padding-16">
            <h2 className="w3-wide">$ 10</h2>
            <span className="w3-opacity">per month</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-green w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-center w3-hover-shadow">
          <li className="w3-dark-grey w3-xlarge w3-padding-32">Pro</li>
          <li className="w3-padding-16">
            <b>25GB</b> Storage
          </li>
          <li className="w3-padding-16">
            <b>25</b> Emails
          </li>
          <li className="w3-padding-16">
            <b>25</b> Domains
          </li>
          <li className="w3-padding-16">
            <b>Endless</b> Support
          </li>
          <li className="w3-padding-16">
            <h2 className="w3-wide">$ 25</h2>
            <span className="w3-opacity">per month</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-green w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div className="w3-third w3-margin-bottom">
        <ul className="w3-ul w3-border w3-center w3-hover-shadow">
          <li className="w3-black w3-xlarge w3-padding-32">Premium</li>
          <li className="w3-padding-16">
            <b>50GB</b> Storage
          </li>
          <li className="w3-padding-16">
            <b>50</b> Emails
          </li>
          <li className="w3-padding-16">
            <b>50</b> Domains
          </li>
          <li className="w3-padding-16">
            <b>Endless</b> Support
          </li>
          <li className="w3-padding-16">
            <h2 className="w3-wide">$ 50</h2>
            <span className="w3-opacity">per month</span>
          </li>
          <li className="w3-light-grey w3-padding-24">
            <button className="w3-button w3-green w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </div>
    </section>
  )
}

export default Plans
