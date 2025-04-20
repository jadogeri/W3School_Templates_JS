import React from 'react'

const MenuModal = () => {
  return (
    <div id="menu" className="w3-modal">
      <div className="w3-modal-content w3-animate-zoom">
        <div className="w3-container w3-black w3-display-container">
          <span
            onClick={()=>{document.getElementById("menu").style.display='none'}}
            className="w3-button w3-display-topright w3-large"
          >
            x
          </span>
          <h1>Starters</h1>
        </div>
        <div className="w3-container">
          <h5>
            Tomato Soup <b>$2.50</b>
          </h5>
          <h5>
            Chicken Salad <b>$3.50</b>
          </h5>
          <h5>
            Bread and Butter <b>$1.00</b>
          </h5>
        </div>
        <div className="w3-container w3-black">
          <h1>Main Courses</h1>
        </div>
        <div className="w3-container">
          <h5>
            Grilled Fish and Potatoes <b>$8.50</b>
          </h5>
          <h5>
            Italian Pizza <b>$5.50</b>
          </h5>
          <h5>
            Veggie Pasta <b>$4.00</b>
          </h5>
          <h5>
            Chicken and Potatoes <b>$6.50</b>
          </h5>
          <h5>
            Deluxe Burger <b>$5.00</b>
          </h5>
        </div>
        <div className="w3-container w3-black">
          <h1>Desserts</h1>
        </div>
        <div className="w3-container">
          <h5>
            Fruit Salad <b>$2.50</b>
          </h5>
          <h5>
            Ice cream <b>$2.00</b>
          </h5>
          <h5>
            Chocolate Cake <b>$4.00</b>
          </h5>
          <h5>
            Cheese <b>$5.50</b>
          </h5>
        </div>
      </div>
    </div>
  )
}

export default MenuModal