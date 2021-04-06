import React from 'react';

import './header.scss';

//  sous composant
import BurgerMenu from 'src/components/Header/BurgerMenu';
import Menu from 'src/components/Header/Menu';

const Header = () => {
  
  return (
  <div className="header">
    <div className="right-part">
      <BurgerMenu />
      <Menu />
    </div>
  </div>
)};

export default Header;
