import React from 'react';
import MenuItem from '../../components/MenuItem';

const Menu = () => {
  return (
    <div className="w3-row w3-padding-64" id="menu">
      <div className="w3-col l6 w3-padding-large">
        <h1 className="w3-center">Our Menu</h1>
        <br />
        <MenuItem 
          title="Bread Basket" description="Assortment of fresh baked fruit breads and muffins 5.50"
          />
        <br />
        <MenuItem 
          title="Honey Almond Granola with Fruits" description="Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"
        />
        <br />
        <MenuItem 
          title="Belgian Waffle" description="Vanilla flavored batter with malted flour 7.50"
        />
        <br />
        <MenuItem 
          title="Scrambled eggs" description="Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
        />
        <br />
        <MenuItem 
          title="Blueberry Pancakes"
          description="With syrup, butter and lots of berries 8.50"
        />
      </div>
      <div className="w3-col l6 w3-padding-large">
        <img
          src="https://www.w3schools.com/w3images/tablesetting.jpg"
          className="w3-round w3-image w3-opacity-min"
          alt="Menu"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Menu;
