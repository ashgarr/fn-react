import React, { Component } from 'react'
import '../App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

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
                        While there are various definitions of fake news, lorem ipsum!
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








            </div>
        )
    }
}

export default About