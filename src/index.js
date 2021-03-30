import React from 'react';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

import { render } from 'react-dom';

import store from './store';


const rootReactElement = (
  <Provider store={store} >
    <App />
  </Provider>
);

const target = document.getElementById('root');

render(rootReactElement, target)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
