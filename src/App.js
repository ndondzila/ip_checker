import React from 'react';
import logo from './ft-logo.png';
import './App.css';
import Auxiliary from './hoc/Auxiliary';

function App() {
  return (
    <div className="App">
      <Auxiliary>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>**A demo project not created/deployed by company**</p>
          </header>
      </Auxiliary>
      <br />
      <Auxiliary>
          <label className="App-label">Please enter an IP address or domain to check:</label>
          <br />
          <hr/>
          <input type='text' className="App-input"></input>
        </Auxiliary>
    </div>
  );
}

export default App;
