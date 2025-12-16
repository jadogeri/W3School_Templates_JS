import React from 'react'
import Pagination from '../components/Pagination';
import Footer from './Footer';

const MainContent = () => {
  return (
    <section>
          <div className="w3-main" style={{ marginLeft: 250 }}>
    <div className="w3-row w3-padding-64">
      <div className="w3-twothird w3-container">
        <h1 className="w3-text-teal">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w3-third w3-container">
        <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
        <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
      </div>
    </div>
    <div className="w3-row">
      <div className="w3-twothird w3-container">
        <h1 className="w3-text-teal">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w3-third w3-container">
        <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
        <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
      </div>
    </div>
    <div className="w3-row w3-padding-64">
      <div className="w3-twothird w3-container">
        <h1 className="w3-text-teal">Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w3-third w3-container">
        <p className="w3-border w3-padding-large w3-padding-32 w3-center">AD</p>
        <p className="w3-border w3-padding-large w3-padding-64 w3-center">AD</p>
      </div>
    </div>
    {/* Pagination */}
    <Pagination />

    <Footer />

    {/* END MAIN */}
  </div>
    </section>
  )
}

export default MainContent