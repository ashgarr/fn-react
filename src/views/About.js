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
                <div className="ml-5 mr-5 text-left">
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
                        Here we provide you a couple of useful tips:
                        <ul>
                            <li>
                                <strong>Pay attention to the use of language. </strong>
                                Exaggeration does not necessarily mean
                                distortion, but we should be aware and cautious of the biases and emotions raised by the author's
                                intended use of language. This is also the most convenient way to become suspicious of certain
                                information.
                            </li>
                            <li>
                                <strong>Consider the source. </strong>
                                When you see sources that are commonly considered credible like BBC or CNN, you are very likely
                                looking at a trustworthy piece of news. Otherwise, Google the sources as long as you can't recognize
                                them.
                            </li>
                            <li>
                                <strong>Check out the quotes and citation. </strong>
                                Take an extra step and actually look up those citations. Fake news love to cite random articles and
                                claim that those authoritative articles are supporting their claims.
                            </li>
                            <li>
                                <strong>Reason. </strong>
                                Logical fallacies can be obvious as long as you are looking for them. Think critically about the 
                                correlation between a proof and an argument and always remember to check your own biases.
                            </li>
                        </ul>
                        Remember to practice them in our <a rel="noopener noreferrer" target="_blank" href="https://famikona.github.io/fn-react/quiz">quiz page</a>!
                    </p>

                    If you want to know more about how to spot fake news, this is
                     <a rel="noopener noreferrer" target="_blank" href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/"> the article</a> we love sharing with people.
                    <br />
                    There are also these two websites that you can use to fact check what's going viral: 
                    <a rel="noopener noreferrer" target="_blank" href="www.factcheck.org"> FactCheck.org </a> and <a rel="noopener noreferrer" target="_blank" href="www.snopes.com">Snopes.com</a>.
                    <br />
                    <br />
                </div>

                <div className="ml-5 text-left">
                    <h5>
                        <u>About this Website</u>
                    </h5>

                    <p>
                        We are a group of students learning front-end development skills. We want to contribute to
                        the movement of stopping fake news and hope this project can help people become more aware of fake news, 
                        resulting in greater misinformation detection skills.
                </p>
                </div>







            </div>
        )
    }
}

export default About