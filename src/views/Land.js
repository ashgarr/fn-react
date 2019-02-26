import React, { Component } from 'react'
import '../App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Land extends Component {
    render() {
        return(
            <div>
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
      </div>
        )
    }
}

export default Land