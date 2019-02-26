import React, { Component } from 'react';
import './App.css';
import SpNav from './components/SpNav'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Land from './views/Land.js'
import { BrowserRouter, Route } from 'react-router-dom';
import Quiz from './views/Quiz.js'

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
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
