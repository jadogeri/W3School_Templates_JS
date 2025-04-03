import React from 'react';
import { openMenu } from '../utils/openMenu';

const MenuCategory = ({
    category,
    label,
    id
    
}) => {
  return (
        <a  onClick={(event)=>{openMenu(event, category);}}
            id={id}>
          <div className="w3-col s4 tablink w3-padding-large w3-hover-red">
            {label}
          </div>
        </a>
  );
}

export default MenuCategory;
