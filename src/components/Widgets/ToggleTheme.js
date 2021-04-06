import React from 'react';
import { Moon } from 'react-feather';

import './toggle.scss';

const ToggleTheme = ({ theme, setTheme }) => {
  const toggle = () => {
    console.log('je suis le theme')
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
    else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (

    <div className="toggle-theme">
      <div className="toggle-bar" onClick={toggle}>
        <div className={(theme === 'light') ? 'toggle-icon' : 'toggle-icon active' }>
          <Moon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ToggleTheme;
