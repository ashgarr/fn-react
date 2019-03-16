import React, { Component } from 'react';

class QuizCard1 extends Component {

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
                <div className="card text-left shadow animated bounceInRight" style={{height: '27rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">FANTASTIC! TRUMP'S 7 POINT PLAN Begins With A Bombshell!</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            100percentfedup.com, 2016-11-01
                        </h6>
                        <p className="card-text pt-2">
                            <small>
                                Since March of 2010, the American people have had to suffer under the incredible economic burden of the Affordable Care Act Obamacare. This legislation, passed by totally partisan votes in the House and Senate and signed into law by the most divisive and partisan President in American history, has tragically but predictably resulted in runaway costs, websites that don't work, greater rationing of care, higher premiums, less competition and fewer choices. Obamacare has raised the economic uncertainty of every single person residing in this country. As it appears Obamacare is certain to collapse of its own weight, the damage done by the Democrats and President Obama, and abetted by the Supreme Court, will be difficult to repair unless the next President and a Republican congress lead the effort to bring much-needed free market reforms to the healthcare industry.
                            </small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default QuizCard1