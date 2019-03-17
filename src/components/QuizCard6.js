import React, { Component } from 'react';

class QuizCard6 extends Component {

    constructor(...args) {
        super(...args);

        this.attachRef = target => this.setState({ target });
        this.state = {
            show: false,
        };
    }

    render() {
        return (

            <>
                <div className="card text-left shadow animated bounceInRight" style={{ height: '27rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">TRUMP WINS THE PRESIDENCY & FORD Shifts TRUCK PRODUCTION FROM MEXICO TO OHIO!</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            bbc.com, 2016-11-14
                        </h6>
                        <p className="card-text pt-2">
                            <small>
                                According to <a href="https://money.cnn.com/2015/08/13/news/companies/ford-truck-mexico-ohio/">this
                                article</a> on CNN, Ford’s heavy duty pickup trucks which used to be built in Mexico started rolling off
                                an assembly line in Ohio this week. That’s good news for the 1,000 Ford workers in Ohio,
                                who might have otherwise been out of work.
                                It’s also good publicity for Ford (F), which has been under fire for investing so much in Mexico. 
                                In April, the automaker said it would invest $2.5 billion in transmission plants in the 
                                Mexican states of Chihuahua and Guanajuato, creating about 3,800 jobs there.</small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default QuizCard6