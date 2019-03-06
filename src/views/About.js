import React, { Component } from 'react'
import '../App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Hint from '../components/Hint'

class About extends Component {
    render() {
        return (
            <div>

                <Jumbotron>
                    <blockquote class="blockquote mb-0">
                        <p class="font-size">When we hear news, we should always wait for the sacrament of confirmation.</p>
                        <footer class="blockquote-footer">Voltaire in <cite title="Source Title">Letter to Charles-Augustin Ferriol, August 28, 1760</cite></footer>
                    </blockquote>
                </Jumbotron>
                <div class="ml-5 text-left">
                    <br />
                    <h5>
                        <u>What Are Fake News?</u>
                    </h5>


                    <p>
                        While there are various definitions of fake news, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                    <br />
                </div>
                <div class="ml-5 text-left">
                    <h5>
                        <u>How to Spot Them?</u>
                    </h5>

                    <p>
                        Here we will provide you a couple useful tips. Remember to practice them in our quiz page!
                    </p>
                    <br />
                </div>

                <div class="ml-5 text-left">
                    <h5>
                        <u>About this Website</u>
                    </h5>

                    <p>
                        We want to stop fake news!
                </p>
                </div>
                {/* <Hint /> */}







            </div>
        )
    }
}

export default About