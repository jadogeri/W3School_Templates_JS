import React from 'react';
import NavLink from '../components/NavLink';
const NavBar = () => {
  return (
    <nav>
        <div className="w3-top">
            <div className="w3-row w3-padding w3-black">
                <NavLink
                    href="#" name="HOME"
                />
                <NavLink
                    href="#about" name="ABOUT"
                />
                <NavLink
                    href="#menu" name="MENU"
                />
                <NavLink
                    href="#where" name="WHERE"
                />
            </div>
        </div>      
    </nav>
  );
}

export default NavBar;
