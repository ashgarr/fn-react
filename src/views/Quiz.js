import React, { Component } from 'react'
import '../App.css'
import ProgressBar from 'react-bootstrap/ProgressBar'
import VerticallyCenteredModal from '../components/VerticallyCenteredModal';
import Button from 'react-bootstrap/Button'
import QuizCard1 from '../components/QuizCard1';
import QuizCard2 from '../components/QuizCard2';
import Hint1 from '../components/Hint1';
import Hint2 from '../components/Hint2';


function ShowCard(props) {
    if (props.number == "1") {
        return <QuizCard1 />;
    }
    if (props.number == "0") {
        return <QuizCard2 />;
    }
}

function ShowHint(props) {
    if (props.number == "1") {
        return <Hint1 />;
    }
    if (props.number == "0") {
        return <Hint2 />;
    }
}

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 1,
            modalShow: true
        }
    }
    render() {
        let modalClose = () => this.setState({ modalShow: false });
        let qnum = this.state.progress % 2;
        return (
            <div>
                <div className="container pt-4">
                    <div className="row">

                        <div className="col-2">
                            <p>
                                {this.state.progress} / 10
                            </p>
                            <ProgressBar now={this.state.progress * 10} />
                        </div>

                        <div className="col-8">

                            <ShowCard number={qnum} />

                                <div className="card-body align-self-center">
                                    <Button
                                        className="btn btn-primary mr-5"
                                        onClick={() => {
                                            this.setState({
                                                progress: this.state.progress + 1
                                            })
                                        }}
                                    >REAL</Button
                                    >
                                    <Button
                                        className="btn btn-danger ml-5"
                                        onClick={() => {


                                            this.setState({
                                                progress: this.state.progress + 1
                                            })
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