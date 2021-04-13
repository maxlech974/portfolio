import React, { useState } from 'react';

import './header.scss';

//  sous composant
import BurgerMenu from 'src/components/Header/BurgerMenu';
import Menu from 'src/components/Header/Menu';

const Header = () => {
  
  const [menuClass, setMenuClass] = useState(false);
 
  return (
  <div className="header">
    <div className="right-part">
      <BurgerMenu menuClass={menuClass} setMenuClass={setMenuClass} />
      <Menu menuClass={menuClass} />
    </div>
  </div>
)};

export default Header;
