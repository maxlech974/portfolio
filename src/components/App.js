import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//import de composants
import Header from 'src/components/Header';
import Main from 'src/components/Main';

//DarkTheme
import { ThemeProvider } from  'styled-components';
import { GlobalStyles } from 'src/styles/global'

import 'src/styles/reset.css';
import { lightTheme } from 'src/styles/theme';

function App({ theme, setTheme }) {

  console.log(theme);
  
  const toggleTheme = () = 
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <Header />
          <Main />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
