import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <NavBar />
      </div>
    );
    
  }
}

export default App;
