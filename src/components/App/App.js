import React, { Component } from 'react';
import './App.css';
import Feelings from '../Feelings/Feelings';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Feelings />
      </div>
    );
  }
}

export default App;
