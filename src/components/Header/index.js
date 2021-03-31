import React from 'react';
import './header.scss';

const Header = () => {

  const navBar = [ 'Accueil', 'Mon Profil', 'Formation', 'Expérience']
  console.log(navBar);

    
    return(<div className="header">
      <ul className="unorder">
        {navBar.map((part) => (<li className="list">{part}</li>))}
      </ul>
    </div>
  );
}

export default Header;