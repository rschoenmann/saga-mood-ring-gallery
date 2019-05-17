import React, { Component } from 'react';
import './App.css';
import Feelings from '../Feelings/Feelings';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>FEELINGS AND ALSO IMAGES</p>
        <Feelings />
      </div>
    );
  }
}

export default App;
