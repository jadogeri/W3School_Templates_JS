import React from 'react';
import { w3_open } from '../utils/w3_open';


const Header = ({   
    logo
}) => {
  return (
    <header>
        <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
            <button
                className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
                onClick={()=>{w3_open()}}
            >
                <i className="fa fa-bars" /> &nbsp;Menu
            </button>
            <span className="w3-bar-item w3-right">
                {logo?logo:"LOGO"}
            </span>
        </div>
    </header>
  );
}

export default Header;
