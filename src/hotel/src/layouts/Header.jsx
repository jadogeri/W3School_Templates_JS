import React from 'react';
import ReservationForm from '../components/forms/ReservationForm';

const Header = () => {
  return (
 <header
    className="w3-display-container w3-content"
    style={{ maxWidth: "100%" }}
  >
    <img
      className="w3-image"
      src="https://www.w3schools.com/w3images/hotel.jpg"
      alt="The Hotel"
      style={{ minWidth: 1000, width:"100%" }}
      width={"100%"}
      height={800}
    />
    <div className="w3-display-left w3-padding w3-col l6 m8">
      <div className="w3-container w3-red">
        <h2>
          <i className="fa fa-bed w3-margin-right" />
          Hotel Name
        </h2>
      </div>
      <div className="w3-container w3-white w3-padding-16">
        <ReservationForm />

      </div>
    </div>
  </header>
  );
}

export default Header;
