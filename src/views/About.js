import React, { Component } from 'react'
import '../App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

class About extends Component {
    render() {
        return (
            <div>

                <Jumbotron>
                    <blockquote className="blockquote mb-0">
                        <p class="font-size">When we hear news, we should always wait for the sacrament of confirmation.</p>
                        <footer className="blockquote-footer">Voltaire in <cite title="Source Title">Letter to Charles-Augustin Ferriol, August 28, 1760</cite></footer>
                    </blockquote>
                </Jumbotron>
                <div className="ml-5 text-left">
                    <br />
                    <h5>
                        <u>What Are Fake News?</u>
                    </h5>


                    <p>
                        While there are various definitions of fake news, we consider fake news as those that misinform readers. 
                        Back in the old days, rumors spread via magazines, emails, or other old-fashioned media, and they were 
                        relatively easy to be recognized. Today, so many of us are bombarded with all kinds of information and it's getting
                        harder to tell truth from lies. Furthermore, thanks to social media, fake news now can go viral and reach hundreds 
                        of thousands of people within hours. From the election of 2016, conspiracy theories about vaccines and autism,
                        to whether microwave causes cancer, we can see how fake news can impact our political views as well as attitudes
                        toward everyday things.
                            </p>
                    <br />
                </div>
                <div className="ml-5 text-left">
                    <h5>
                        <u>How to Spot Them?</u>
                    </h5>

                    <p>
                        There are tons of articles online talking about how to identify fake news. 
                        Here we will provide you a couple useful tips: 
                        <ul>
                            <li>
                                <strong>Pay attention to the use of language</strong>
                            </li>
                        </ul>
                        Remember to practice them in our quiz page!
                    </p>
                    <br />
                </div>

                <div className="ml-5 text-left">
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