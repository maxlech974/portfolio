import React from 'react';

import './burger.scss';

const BurgerMenu = ({menuClass, setMenuClass}) => {
  
  let open = false;
  const toggleMenu = () => {
  setMenuClass(!menuClass);
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
