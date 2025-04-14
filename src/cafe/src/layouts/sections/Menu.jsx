import React from 'react';
import { openMenu } from '../../utils/openMenu';
import MenuItem from '../../components/MenuItem';

const Menu = () => {
  return (
    <section>
    <div className="w3-container" id="menu">
      <div className="w3-content" style={{ maxWidth: 700 }}>
        <h5 className="w3-center w3-padding-48">
          <span className="w3-tag w3-wide">THE MENU</span>
        </h5>
        <div className="w3-row w3-center w3-card w3-padding">
          <a
           
            onClick={(event)=>{openMenu(event, 'Eat')}}
            id="myLink"
          >
            <div className="w3-col s6 tablink">Eat</div>
          </a>
          <a 
          onClick={(event)=>{openMenu(event, 'Drinks')}}>
            <div className="w3-col s6 tablink">Drink</div>
          </a>
        </div>
        <div id="Eat" className="w3-container menu w3-padding-48 w3-card">
          <MenuItem
            item="read Basket"
            description="Assortment of fresh baked fruit breads and muffins 5.50"
          />
          <br />
          <MenuItem
            item="Honey Almond Granola with Fruits"
            description="    Natural cereal of honey toasted oats, raisins, almonds and dates
            7.00"
          />
          <br />
          <MenuItem
            item="Belgian Waffle"
            description="Vanilla flavored batter with malted flour 7.50"
          />
          <br />
          <MenuItem
            item="Scrambled eggs"
            description="Scrambled eggs, roasted red pepper and garlic, with green onions
            7.50"
          />
          <br />
          <MenuItem
            item="Blueberry Pancakes"
            description=" With syrup, butter and lots of berries 8.50"
          />
        </div>
        <div id="Drinks" className="w3-container menu w3-padding-48 w3-card">
          <MenuItem
            item="Coffee"
            description="Regular coffee 2.50"
          />
          <br />
          <MenuItem
            item="Chocolato"
            description="Chocolate espresso with milk 4.50"
          />
          <br />
          <MenuItem
            item="Corretto"
            description="Whiskey and coffee 5.00"
          />
          <br />
          <MenuItem
            item="Iced tea"
            description="Hot tea, except not hot 3.00"
          />
          <br />
          <MenuItem
            item="Soda"
            description="Coke, Sprite, Fanta, etc. 2.50"
          />
        </div>
        <img
          src="https://www.w3schools.com/w3images/coffeehouse2.jpg" alt=""
          style={{ width: "100%", maxWidth: 1000, marginTop: 32 }}
        />
      </div>
    </div>
    </section>
  );
}

export default Menu;
