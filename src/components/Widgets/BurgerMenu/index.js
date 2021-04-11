import React from 'react';

import './burger.scss';

const BurgerMenu = ({menu, setMenu}) => {
  let open = false;

  const toggleMenu = () => {
    const unorder = document.querySelector('.menu-box');

    if (open === false) {
      unorder.setAttribute('style', 'display: block;');
      setMenu('menu-box active');
    }
    else {
      unorder.setAttribute('style', '');
      setMenu('menu-box');
    }
    open = !open;
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
