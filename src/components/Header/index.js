import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

import headerNav from 'src/Data/headerNav';

const Header = () => {

    
  return(<div className="header">
    <div className="burger-menu">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
    <ul className="unorder">
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