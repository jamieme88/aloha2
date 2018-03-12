import React, { Component } from 'react';
import Content from './containers/Content';
import Side from './containers/Side';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Side />
        <Content />
      </div>
    );
  }
}

export default App;
