import React, { Component } from 'react';
import './App.css';
import Feelings from '../Feelings/Feelings';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Mood Ring Gallery</h1>
        <Feelings />
      </div>
    );
  }
}

export default App;
