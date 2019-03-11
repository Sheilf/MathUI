import React, { Component } from 'react';
import './App.css';
import './styles/flexborder.css';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <main className="App flex-border-column-centered">
        <Banner banner="app-banner" />
        <Login />

      </main>
    );
  }
}

export default App;
