import React, { Component } from 'react';
import './App.css';
import SpNav from './components/SpNav'
import Land from './views/Land.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Quiz from './views/Quiz.js'
import About from './views/About.js'
import Verify from './views/Verify.js'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';

class App extends Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="fillParent">
            {/* <header className="App-header"> */}

            <SpNav />

            <Route exact path="/" component={Land} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/about" component={About} />
            <Route path="/verify" component={Verify} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
