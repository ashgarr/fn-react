import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class App extends Component {
  constructor(props) {
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
        {/* <header className="App-header"> */}

        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img 
            alt="logo" 
            src={logo}
            width="200"
            
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              
              <Nav.Link href="#deets">Quiz</Nav.Link>
              <Nav.Link href="#deets">Verify</Nav.Link>
              <Nav.Link href="#deets">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
  </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <p>
          pressed: {this.state.numClicks}
        </p>

        <Button
          variant="outline-success"
          //color="primary"
          onClick={this.handleClick}
        >
          Press me!
          </Button>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit </Button>
        </Form>

        {/* </header> */}
      </div>
    );
  }
}

export default App;
