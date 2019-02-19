import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Postlist from './Components/Postlist'
class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Postlist />
      </div>
    )
  }
}

export default App;
