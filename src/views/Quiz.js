import React, { Component } from 'react'
import '../App.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import VerticallyCenteredModal from '../components/VerticallyCenteredModal';
import Button from 'react-bootstrap/Button'
import QuizCard1 from '../components/QuizCard1';
import QuizCard2 from '../components/QuizCard2';
import Hint1 from '../components/Hint1';
import Hint2 from '../components/Hint2';

let answerArray = [null, null];
const numOfQuestions = 3;

class ResultCard extends Component {
    render(){
        return (
            <>
            <div className="card text-left shadow animated bounceInRight" style={{height: '27rem'}}>
                <div className="card-body">
                    <h5 className="card-title">Your Answers</h5>
                    <h6 className="card-subtitle font-weight-normal text-muted">
                        What you picked:
                    </h6>
                    <p className="card-text pt-2">
                        <small>
                            For Q1, you picked {answerArray[0]};
                            <br />
                            For Q2, you picked {answerArray[1]};
                        </small>
                    </p>
                </div>
            </div>
        </>
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
    if (props.number == numOfQuestions) {
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
    if (props.number == numOfQuestions) {
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
                                {this.state.progress} / {numOfQuestions}
                            </p>
                            <ProgressBar now={this.state.progress * 100 / numOfQuestions} />
                        </div>

                        <div className="col-8">

                            <ShowCard number={qnum} />

                                <div className="card-body align-self-center">
                                    <Button
                                        className="btn btn-primary mr-5"
                                        onClick={() => {
                                            answerArray[this.state.progress-1] = "true";
                                            this.setState({
                                                progress: this.state.progress + 1,
                                            })
                                            console.log(answerArray);
                                        }}
                                    >REAL</Button
                                    >
                                    <Button
                                        className="btn btn-danger ml-5"
                                        onClick={() => {
                                            answerArray[this.state.progress-1] = "false";
                                            this.setState({
                                                progress: this.state.progress + 1,
                                            })
                                            console.log(answerArray);
                                        }}
                                    >FAKE</Button
                                    >
                                </div>
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