import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './components/menu';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Menu />
  </React.StrictMode>,
  document.getElementById('root')
);