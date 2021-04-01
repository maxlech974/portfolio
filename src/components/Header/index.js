import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {

  const navBar = [
    {
      name:'Accueil', 
      path: '/'
    },

    {
      name:'Mon Profil', 
      path: '/my-profile'
    },
    
    {
      name:'Formation', 
      path: '/training'
    },

    {
      name:'Expériences', 
      path: '/experiences'
    }
  ];

  console.log(navBar);

    
    return(<div className="header">
      <ul className="unorder">
        {navBar.map((part) => (<li className="list"><Link to={part.path}>{part.name}</Link></li>))}
      </ul>
    </div>
  );
}

export default Header;