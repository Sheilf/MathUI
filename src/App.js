import React, { Component } from 'react';
import './App.css';
import './styles/flexborder.css';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login'


// <div id="portal-container">
// <button><Link to="/login"> Students </button>
// <button>Teachers</button>
// </div>
//Login page that portals into the applicaton

class App extends Component {
  render() {
    return (
      <main className="App flex-border-column-centered">
        <img id="welcome-bot" src="https://res.cloudinary.com/eduprojectsil/image/upload/v1553275724/LogoMakr_4Gt8tK_r4qcqs.png" />
        <Banner banner="app-banner" heading="MathUI" subheading="Connecting classrooms together." />

     
        <Login />

      </main>
    );
  }
}

export default App;
