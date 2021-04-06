import React from 'react';
import { Moon } from 'react-feather';

import './toggle.scss';

const ToggleTheme = ({ theme, setTheme }) => {
  const toggle = () => {
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
      <h1>Theme Sombre</h1>
      <div className="toggle-bar" onClick={toggle}>
        <div className={(theme === 'light') ? 'toggle-icon' : 'toggle-icon active' }>
          <Moon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ToggleTheme;
