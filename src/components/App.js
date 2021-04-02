import { BrowserRouter as Router } from 'react-router-dom';

//import de composants
import Header from 'src/components/Header';
import Main from 'src/components/Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main />
      </Router>
    </div>
  );
}

export default App;
