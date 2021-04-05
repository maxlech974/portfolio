import React from 'react';



const ToggleTheme = ({ theme, setTheme }) => {

  const toggle = () => {
    if(theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
    else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  }

  return (
  <button onClick={toggle}>
    toggle theme
  </button>

  );
}

export default ToggleTheme;