import React, { Component } from 'react';
// import './App.css';
import Jumbotron from './components/Jumbotron';
import Articles from "./pages/Articles";
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <Jumbotron />
          <Articles />
        </div>
      </div>
    );
  }
}

export default App;
