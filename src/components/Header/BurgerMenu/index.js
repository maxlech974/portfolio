import React from 'react';

import './burger.scss';

const BurgerMenu = () => {
  let open = false;

  const toggleMenu = () => {
    const unorder = document.querySelector('.menu-box');

    if (open === false) {
      unorder.setAttribute('style', 'display: block;');
    }
    else {
      unorder.setAttribute('style', '');
    }
    open = !open;
  };
  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default BurgerMenu