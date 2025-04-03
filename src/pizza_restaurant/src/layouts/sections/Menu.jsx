import React from 'react';
import MenuCategory from '../../components/MenuCategory';

const Menu = () => {
  return (
    <div className="w3-content">
      <h1 className="w3-center w3-jumbo" style={{ marginBottom: 64 }}>
        THE MENU
      </h1>
      <div className="w3-row w3-center w3-border w3-border-dark-grey">

        <MenuCategory 
          category={"Pizza"} label={"Pizza"} id={"myLink"}        
        />  
        <MenuCategory 
          category={"Pasta"} label={"Salads"} id={"pasta"}        
        />  
        <MenuCategory 
          category={"Starter"} label={"Starter"} id={"starter"}        
        />

      </div>
      {/* #TODO BREAK CODE INTO REUSABLE COMPONENTS */}
      <div id="Pizza" className="w3-container menu w3-padding-32 w3-white">
        <h1>
          <b>Margherita</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$12.50</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, fresh mozzarella, fresh basil
        </p>
        <hr />
        <h1>
          <b>Formaggio</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$15.50</span>
        </h1>
        <p className="w3-text-grey">
          Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)
        </p>
        <hr />
        <h1>
          <b>Chicken</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$17.00</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, mozzarella, chicken, onions
        </p>
        <hr />
        <h1>
          <b>Pineapple'o'clock</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$16.50</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil
        </p>
        <hr />
        <h1>
          <b>Meat Town</b> <span className="w3-tag w3-red w3-round">Hot!</span>
          <span className="w3-right w3-tag w3-dark-grey w3-round">$20.00</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken
        </p>
        <hr />
        <h1>
          <b>Parma</b> <span className="w3-tag w3-grey w3-round">New</span>
          <span className="w3-right w3-tag w3-dark-grey w3-round">$21.50</span>
        </h1>
        <p className="w3-text-grey">
          Fresh tomatoes, mozzarella, parma, bacon, fresh arugula
        </p>
      </div>
      <div id="Pasta" className="w3-container menu w3-padding-32 w3-white">
        <h1>
          <b>Lasagna</b>{" "}
          <span className="w3-tag w3-grey w3-round">Popular</span>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$13.50</span>
        </h1>
        <p className="w3-text-grey">
          Special sauce, mozzarella, parmesan, ground beef
        </p>
        <hr />
        <h1>
          <b>Ravioli</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$14.50</span>
        </h1>
        <p className="w3-text-grey">Ravioli filled with cheese</p>
        <hr />
        <h1>
          <b>Spaghetti Classica</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$11.00</span>
        </h1>
        <p className="w3-text-grey">Fresh tomatoes, onions, ground beef</p>
        <hr />
        <h1>
          <b>Seafood pasta</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$25.50</span>
        </h1>
        <p className="w3-text-grey">Salmon, shrimp, lobster, garlic</p>
      </div>
      <div id="Starter" className="w3-container menu w3-padding-32 w3-white">
        <h1>
          <b>Today's Soup</b>{" "}
          <span className="w3-tag w3-grey w3-round">Seasonal</span>
          <span className="w3-right w3-tag w3-dark-grey w3-round">$5.50</span>
        </h1>
        <p className="w3-text-grey">Ask the waiter</p>
        <hr />
        <h1>
          <b>Bruschetta</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$8.50</span>
        </h1>
        <p className="w3-text-grey">
          Bread with pesto, tomatoes, onion, garlic
        </p>
        <hr />
        <h1>
          <b>Garlic bread</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$9.50</span>
        </h1>
        <p className="w3-text-grey">Grilled ciabatta, garlic butter, onions</p>
        <hr />
        <h1>
          <b>Tomozzarella</b>{" "}
          <span className="w3-right w3-tag w3-dark-grey w3-round">$10.50</span>
        </h1>
        <p className="w3-text-grey">Tomatoes and mozzarella</p>
      </div>
      <br />
    </div>
  );
}

export default Menu;
