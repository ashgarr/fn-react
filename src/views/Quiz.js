import React, { Component } from 'react'
import '../App.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import VerticallyCenteredModal from '../components/VerticallyCenteredModal';
import Button from 'react-bootstrap/Button'
import QuizCard1 from '../components/QuizCard1';
import QuizCard2 from '../components/QuizCard2';
import QuizCard3 from '../components/QuizCard3';
import QuizCard4 from '../components/QuizCard4';
import QuizCard5 from '../components/QuizCard5';
import QuizCard6 from '../components/QuizCard6';
import QuizCard7 from '../components/QuizCard7';
import QuizCard8 from '../components/QuizCard8';
import Hint1 from '../components/Hint1';
import Hint2 from '../components/Hint2';
import Hint3 from '../components/Hint3';
import Hint4 from '../components/Hint4';
import Hint5 from '../components/Hint5';
import Hint6 from '../components/Hint6';
import Hint7 from '../components/Hint7';
import Hint8 from '../components/Hint8';

let answerArray = [null, null, null, null, null, null, null, null];
let resultArray = [null, null, null, null, null, null, null, null];

const numOfQuestions = 8;
const correct = ["FAKE", "FAKE", "REAL", "FAKE", "REAL", "FAKE", "REAL", "FAKE"];

function grade() {
    let count = 0;
    for (let i = 0; i < numOfQuestions; i++) {
        if (answerArray[i] == correct[i]) {
            count += 1;
            resultArray[i] = true;
        } else {
            resultArray[i] = false;
        }
    }
    return count;
}

class ResultCard extends Component {
    render() {
        return (
            <div>
                <div className="card text-left shadow animated bounceInRight">
                    <div className="card-body">
                        <h5 className="card-title">Your Quiz Result</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            You got {grade()} out of {numOfQuestions}!
                    </h6>
                        <p className="card-text pt-2">
                            For Q1, you picked {answerArray[0] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[0] ?
                                <span> &#9989;</span> :

                                <>
                                    <span> &#10062;</span>
                                    <br />
                                    <strong>Key for solving this:</strong> The language used is extremely exaggerated. Pay attention to words like
                                    "suffer," "incredible," "tragically," etc. Without statistics or poll, the author can't justify the use of those words.
                            <br />
                                </>
                            }

                            <br />
                            For Q2, you picked {answerArray[1] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[1] ?
                                <span> &#9989;</span> :
                                <>
                                    <span> &#10062;</span>
                                    <br />
                                    <strong>Key for solving this:</strong> The reasoning process contains many logical fallacies and none of the claims
                                    are supported by credible sources. Try to read carefully sentence by sentence to see how this vulnerable argument is built up.
                        <br />
                                </>

                            }

                            <br />
                            For Q3, you picked {answerArray[2] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[2] ?
                                <span> &#9989;</span> :
                                <span> &#10062;</span>}

                            <br /><br />
                            For Q4, you picked {answerArray[3] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[3] ?
                                <span> &#9989;</span> :
                                <><span> &#10062;</span>
                                    <br />
                                    <strong>Key for solving this:</strong> After googling the author, you will realize that the author of this
                                    article is notoriously known for creating and spreading fake news.
                                <br />
                                    <a href="https://www.factcheck.org/2016/02/debunking-obamas-dubai-domicile/">
                                        More about this piece of news
                                </a>
                                    <br />
                                </>
                            }
                            <br />

                            For Q5, you picked {answerArray[4] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[4] ?
                                <span> &#9989;</span> :
                                <span> &#10062;</span>}
                            <br /><br />

                            For Q6, you picked {answerArray[5] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[5] ?
                                <span> &#9989;</span> :
                                <>
                                    <span> &#10062;</span>
                                    <br />
                                    <strong>Key for solving this:</strong> Check the date! Ford did shift its truck production from Mexico to Ohio,
                                but it's decided <strong>a year</strong> before Trump won the election. So the correlation implied in the title did not stand.
                               <br />
                                    <a href="https://www.snopes.com/fact-check/ford-from-mexico-to-ohio/">
                                        More about this piece of news
                                </a>
                                    <br />
                                </>
                            }
                            <br />

                            For Q7, you picked {answerArray[6] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[6] ?
                                <span> &#9989;</span> :
                                <span> &#10062;</span>}
                            <br /><br />

                            For Q8, you picked {answerArray[7] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[7] ?
                                <span> &#9989;</span> :
                                <>
                                    <span> &#10062;</span>
                                    <br />
                                    <strong>Key for solving this:</strong> Google the announcement! FDA has never made such announcement.
                                    Also pay attention to the exaggerated use of language and obvious conspiracy theories like "The
                                    FDA have removed the pamphlet/article."
                                    <br />
                                    <a href="https://www.factcheck.org/2017/11/debunking-false-vaccine-claim/">
                                        More about this piece of news</a>
                                    <br />
                                </>}
                            <br />
                            <br />
                            For more detailed instruction on how to spot fake news, we highly recommend you read
                            <a rel="noopener noreferrer" target="_blank" href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/"> this article</a> by FactCheck.org.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

function ShowCard(props) {
    if (props.number == "1") {
        return <QuizCard1 />;
    }
    if (props.number == "2") {
        return <QuizCard2 />;
    }
    if (props.number == "3") {
        return <QuizCard3 />;
    }
    if (props.number == "4") {
        return <QuizCard4 />;
    }
    if (props.number == "5") {
        return <QuizCard5 />;
    }
    if (props.number == "6") {
        return <QuizCard6 />;
    }
    if (props.number == "7") {
        return <QuizCard7 />;
    }
    if (props.number == "8") {
        return <QuizCard8 />;
    }
    if (props.number == numOfQuestions + 1) {
        return <ResultCard />;
    }
}

function ShowHint(props) {
    if (props.number == "1") {
        return <Hint1 />;
    }
    if (props.number == "2") {
        return <Hint2 />;
    }
    if (props.number == "3") {
        return <Hint3 />;
    }
    if (props.number == "4") {
        return <Hint4 />;
    }
    if (props.number == "5") {
        return <Hint5 />;
    }
    if (props.number == "6") {
        return <Hint6 />;
    }
    if (props.number == "7") {
        return <Hint7 />;
    }
    if (props.number == "8") {
        return <Hint8 />;
    }
    if (props.number == numOfQuestions + 1) {
        return <> </>;
    }
}

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 1,
            modalShow: true,
            answers: answerArray
        };
    }

    ShowButton() {
        if (this.state.progress == numOfQuestions + 1) {
            return (
                <div className="card-body align-self-center">
                    <Button
                        className="btn-lg btn-info mr-5"
                        onClick={() => {

                        }}
                    >Share this!
                    </Button>
                    {/* <Button
                        className="btn-lg btn-info mr-5"
                        onClick={() => {

                        }}
                    >Download
                    </Button> */}
                </div>
            );
        } else {
            return (
                <div className="card-body align-self-center">
                    <Button
                        className="btn-lg btn-primary mr-5"
                        onClick={() => {
                            answerArray[this.state.progress - 1] = "REAL";
                            this.setState({
                                progress: this.state.progress + 1,
                            })
                            console.log(answerArray);
                        }}
                    >REAL
            </Button>
                    <Button
                        className="btn-lg btn-danger ml-5"
                        onClick={() => {
                            answerArray[this.state.progress - 1] = "FAKE";
                            this.setState({
                                progress: this.state.progress + 1,
                            })
                            console.log(answerArray);
                        }}
                    >FAKE
            </Button>
                </div>
            )
        }
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });
        let qnum = this.state.progress;
        return (
            <div>
                <div className="container pt-4">
                    <div className="row">

                        <div className="col-2">
                            <p>
                                {this.state.progress < numOfQuestions ? this.state.progress : numOfQuestions} / {numOfQuestions}
                            </p>
                            <ProgressBar now={(this.state.progress) * 100 / numOfQuestions} />
                        </div>

                        <div className="col-8">

                            <ShowCard number={qnum} />

                            {this.ShowButton()}

                        </div>

                        <div className="col-2">

                            <ShowHint number={qnum} />

                        </div>
                        <VerticallyCenteredModal
                            show={this.state.modalShow}
                            onHide={modalClose}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz