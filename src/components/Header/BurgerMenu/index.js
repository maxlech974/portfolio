import React from 'react';

import './burger.scss';

const BurgerMenu = () => {
  
  const toggleMenu = () => {
    const unorder = document.getElementById('unorder');
    unorder.setAttribute("style", "display: flex;")
  }
  return(
    <div className="burger-menu" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

export default BurgerMenu