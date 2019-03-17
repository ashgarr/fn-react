import React, { Component } from 'react';

class QuizCard7 extends Component {

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
                        <h5 className="card-title">Emergencies declared across Midwest amid ‘historic’ flooding</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            washingtonpost.com, 2019-03-16
                        </h6>
                        <p className="card-text pt-2">
                            <small> 
                            Authorities in the Midwest declared states of emergency amid what they called “historic” flooding, 
                            which forecasters warned would stretch through the weekend.

The flooding shut down roads, forced scores of people to evacuate their homes and cut off access to some towns and cities. In 
Nebraska, which has seen some of the most significant flooding, Gov. Pete Ricketts (R) said the impacts of the “devastating 
flooding ... could last for quite some time.”

Even the forecasters were not immune: The National Weather Service in Omaha reported Friday that it had to evacuate its offices 
because of rising waters.

Forecasters said Saturday that at least five states were still facing the flood threat.

“Major and historical river flooding will continue this weekend along parts of the Missouri and Mississippi River basins. Much of 
the flooding is focused across Iowa, southern Minnesota and Wisconsin, eastern Nebraska and southeast South Dakota,” the National 
Weather Service reported.</small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default QuizCard7