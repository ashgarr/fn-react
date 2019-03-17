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

let answerArray = [null, null, null, null];
let resultArray = [null, null, null, null];

const numOfQuestions = 5;
const correct = ["FAKE", "FAKE", "REAL", "FAKE", "REAL"];

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
                <div className="card text-left shadow animated bounceInRight" style={{ height: '27rem' }}>
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
                                <span> &#10062;</span>}
                                
                            <br />
                            For Q2, you picked {answerArray[1] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[1] ?
                                <span> &#9989;</span> :
                                <span> &#10062;</span>}

                            <br />
                            For Q3, you picked {answerArray[2] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[2] ?
                                <span> &#9989;</span> :
                                <span> &#10062;</span>}

                            <br />
                            For Q4, you picked {answerArray[3] == "FAKE" ?
                                <span className='text-danger'><strong>FAKE</strong></span> :
                                <span className='text-primary'><strong> REAL</strong></span>},
                                which is {resultArray[3] ?
                                <span> &#9989;</span> :
                                <span> &#10062;</span>}

                            <br />
                            <br />
                            For more instruction on how to spot fake news, we highly recommend you read 
                            <a rel= "noopener noreferrer" target="_blank" href="https://www.factcheck.org/2016/11/how-to-spot-fake-news/"> this article</a> by FactCheck.org.
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
                        className="btn-lg btn-success mr-5"
                        onClick={() => {

                        }}
                    >Share this!
                    </Button>
                    <Button
                        className="btn-lg btn-info mr-5"
                        onClick={() => {

                        }}
                    >Download
                    </Button>
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