import React from 'react';
import { NavLink } from 'react-router-dom';

import ToggleTheme from 'src/containers/Widgets/ToggleTheme';

import headerNav from 'src/Data/headerNav';

import './menu.scss';

const Menu = () => (
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
);

export default Menu;
