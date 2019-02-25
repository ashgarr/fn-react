import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}

        <Navbar className="shadow" collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home" >
            <img
              alt="logo"
              src={logo}
              width="250"
              class="pl-5"

            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="Menu mt-2">
              {/* <a href="#deets">Quiz</a>
            <a href="#deets">Verify</a>
            <a href="#deets">About</a> */}
              <NavItem><Nav.Link href="#deets" >Quiz</Nav.Link></NavItem>
              <NavItem><Nav.Link href="#deets">Verify</Nav.Link></NavItem>
              <NavItem className="mr-5"><Nav.Link href="#deets">About</Nav.Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Jumbotron>
          <h1>This is FNProof.</h1>
          <h5>
            We aim to provide tools for people to improve their skills of identifying fake news.
          </h5>

        </Jumbotron>

        <div class="container pt-4">
          <div class="row justify-content-center">

            <div class="col">
              <div class="card mb-4 shadow">
                <div class="card-body">
                  <h5 class="card-title">Quiz</h5>
                  <p class="card-subtitle pb-3">
                    Take the challenge. Thinking critically.
                  </p>
                  <a
                    href="https://github.com"
                    class="btn btn-secondary"
                  >Start</a
                  >
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card mb-4 shadow">
                <div class="card-body">
                  <h5 class="card-title">Identification</h5>
                  <p class="card-subtitle pb-3">
                    Give us the news. We'll test it for you.
                  </p>
                  <a
                    href="https://github.com"
                    class="btn btn-secondary"
                  >Start</a
                  >
                </div>
              </div>
            </div>

            {/* <div class="view overlay">
                <img
                  alt="logo"
                  src={logo}
                  width="200"
                  class="pl-5"

                />
                <div class="mask flex-center rgba-red-strong">
                  <p class="white-text">You will be given 10 questions and asked to tell if they are fake or not.
                    We will give you hints and instructions on how to systematically identify them. Happy learning!</p>
                </div>

            </div> */}



            <div class="col">
              <div class="card mb-4 shadow">
                <div class="card-body">
                  <h5 class="card-title">About</h5>
                  <p class="card-subtitle pb-3">
                    Who we are and what fake news are.
                  </p>
                  <a
                    href="https://github.com"
                    class="btn btn-secondary"
                  >Start</a
                  >
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* <Form>
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
        </Form> */}

        {/* </header> */}
      </div>

    );
  }
}

export default App;
