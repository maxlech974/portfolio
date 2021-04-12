import React from 'react';

import './burger.scss';

const BurgerMenu = ({menuClass, setMenuClass}) => {
  
let open = (menuClass);
  const toggleMenu = () => {
    const unorder = document.querySelector('.menu-box');
    console.log(open);
    if (open === false) {
      unorder.setAttribute('style', 'display: block;');
      setMenuClass('active');
      open = true;
    }
    else {
      unorder.setAttribute('style', '');
      setMenuClass('');
      open = false;
    }
  };
  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  );
};

export default BurgerMenu;
