import React from 'react';

import './header.scss';

//  sous composant
import BurgerMenu from 'src/containers/Widgets/BurgerMenu';
import Menu from 'src/components/Header/Menu';

const Header = ({menu}) => {
  
  console.log(menu)
  return (
  <div className="header">
    <div className="right-part">
      <BurgerMenu className="burger-fixed" />
      <Menu menu={menu} />
    </div>
  </div>
)};

export default Header;
