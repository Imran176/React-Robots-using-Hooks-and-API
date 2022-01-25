import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className= 't1'>React Ninja Here!</h1>
      </div>
    );
  }
}

export default App;
