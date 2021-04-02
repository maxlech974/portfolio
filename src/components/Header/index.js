import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

//data
import headerNav from 'src/Data/headerNav';

//sous composant
import BurgerMenu from 'src/components/Header/BurgerMenu';

const Header = () => {

    
  return(<div className="header">
    <BurgerMenu />
    <ul id="unorder">
      {console.log(headerNav)}
      {headerNav.map((part) => (
        <li className="list">
          <NavLink 
            to={part.path} 
            activeClassName="selected" 
            exact
          >
            {part.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Header;