import React from 'react';
import { NavLink } from 'react-router-dom';

import ToggleTheme from 'src/containers/Widgets/ToggleTheme';

import headerNav from 'src/Data/headerNav';

import './menu.scss';

const Menu = ({menuClass}) => (
  <div className={'menu-box '+menuClass}>
    <ToggleTheme />
    {console.log('menu', menuClass)}
    <ul className="unorder">
      {headerNav.map((part) => (
        <li className="list">
          <NavLink
            to={part.path}
            className="link"
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

export default Menu;
