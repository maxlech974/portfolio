import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

//data
import headerNav from 'src/Data/headerNav';

//sous composant
import BurgerMenu from 'src/components/Header/BurgerMenu';
import ToggleTheme from 'src/containers/Widgets/ToggleTheme';

const Header = () => {

  return(<div className="header">
    <BurgerMenu />
    <ul id="unorder">
      <ToggleTheme />
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