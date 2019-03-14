import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

        <div className="container pt-4">
          <div className="row justify-content-center">

            <div className="col">
              <div className="card mb-4 shadow col-12 col-md">
                <div className="card-body">
                  <h5 className="card-title">Quiz</h5>
                  <p className="card-subtitle pb-3">
                    See if you can spot false news in the wild.
                  </p>
                  <Link
                    to="/quiz"
                    className="btn btn-primary"
                  >Start</Link
                  >
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 shadow col-12 col-md">
                <div className="card-body">
                  <h5 className="card-title">Identification</h5>
                  <p className="card-subtitle pb-3">
                    Give us the news. <br/> We'll test it for you.
                  </p>
                  <Link
                    to="/verify"
                    className="btn btn-primary"
                  >Start</Link
                  >
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 shadow col-12 col-md">
                <div className="card-body">
                  <h5 className="card-title">About</h5>
                  <p className="card-subtitle pb-3">
                    Learn more about us and fake news. <br/> (2 for 1!)
                  </p>
                  <Link
                    to="/about"
                    className="btn btn-primary"
                  >Start</Link
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