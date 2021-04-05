import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

//  import de composants
import Header from 'src/containers/Header';
import Main from 'src/components/Main';

//  DarkTheme
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'src/styles/global';

import 'src/styles/reset.css';
import './app.scss';

// import des thèmes pour le toggle
import { lightTheme, darkTheme } from 'src/styles/theme';

function App({ theme }) {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Header />
          <Main />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
