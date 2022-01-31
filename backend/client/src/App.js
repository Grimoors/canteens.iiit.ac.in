// import logo from './logo.svg';
import React, { Component } from 'react';
import AppNavbar from './components/appnavbar';

import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {
        // <h1>Hello</h1>
        <AppNavbar></AppNavbar>

      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      // </header> */
      }
    </div>
  );
}

export default App;
