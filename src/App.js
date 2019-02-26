import React, { Component } from 'react';
import './App.css';
import SpNav from './components/SpNav'
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';

class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}

        <SpNav />

        <Jumbotron>
          <h1>This is FNProof.</h1>
          <h5>
            We aim to provide tools for people to improve their skills of identifying fake news.
          </h5>

        </Jumbotron>

        <div class="container pt-4">
          <div class="row justify-content-center">

            <div class="col">
              <div class="card h-100 mb-4 shadow col-12 col-md">
                <div class="card-body">
                  <h5 class="card-title">Quiz</h5>
                  <p class="card-subtitle pb-3">
                    See if you can spot false news in the wild.
                  </p>
                  <a
                    href="https://github.com"
                    class="btn btn-primary"
                  >Start</a
                  >
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card h-100 mb-4 shadow col-12 col-md">
                <div class="card-body">
                  <h5 class="card-title">Identification</h5>
                  <p class="card-subtitle pb-3">
                    Give us the news. <br/> We'll test it for you.
                  </p>
                  <a
                    href="https://github.com"
                    class="btn btn-primary"
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
              <div class="card h-100 mb-4 shadow col-12 col-md">
                <div class="card-body">
                  <h5 class="card-title">About</h5>
                  <p class="card-subtitle pb-3">
                    Learn more about us and fake news. <br/> (2 for 1!)
                  </p>
                  <a
                    href="https://github.com"
                    class="btn btn-primary"
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
