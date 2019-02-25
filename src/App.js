import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      numClicks: 0
    }

  }
  handleClick = () => {
    this.setState({
      numClicks: this.state.numClicks + 1
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            pressed: {this.state.numClicks}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button 
            variant="contained"
            color="primary"
            onClick={this.handleClick}
            >
            Button
          </Button>

        </header>
      </div>
    );
  }
}

export default App;
