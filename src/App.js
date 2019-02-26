import React, { Component } from 'react';
import './App.css';
import SpNav from './components/SpNav'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Land from './views/Land.js'

class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}

        <SpNav />

        <Land />
      </div>
    );
  }
}

export default App;
