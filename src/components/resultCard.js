import React, { Component } from 'react';

class resultCard extends Component {

    constructor(...args) {
        super(...args);

        this.attachRef = target => this.setState({ target });
        this.state = {
            show: false
        };
    }

    render() {
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
                                
                            </small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default resultCard