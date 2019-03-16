import React, { Component } from 'react';

class QuizCard3 extends Component {

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
                        <h5 className="card-title">Boeing will keep building new 737 Max planes as it scrambles to get them back in the air</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            cnn.com, 2019-3-14
                        </h6>
                        <p className="card-text pt-2">
                            <small>
                            Boeing will temporarily stop delivering 737 Max jets to airlines while it determines what caused two of those planes to crash. But it will continue building the planes.

The 737 Max is the company's bestselling jet and remains in huge demand, despite two recent fatal crashes.
Boeing (BA) announced its decision to halt deliveries late Thursday. The planes were grounded for an indefinite period globally this week in the wake of the incidents — a crash in October by Lion Air in Indonesia, and a crash Sunday involving Ethiopian Airlines.
The announcement that the production line will continue is good news for thousands of Boeing employees — machinists, technical employees and supervisors — who work on the assembly line in Renton, Washington. Boeing would not give the number of workers who specifically work on the Max program. It has 70,000 employees in the state, though not all are involved in manufacturing, and many of those work on planes other than the 737 Max.
The move is not a surprise. It would be massively disruptive for Boeing to shut production because of the grounding, said Cai Von Rumohr, an aerospace analyst with Cowen. Its suppliers would also be hurt if they couldn't make and deliver the parts and components used by Boeing. And Boeing is trying to ramp up production of the planes to get them to customers as soon as possible. It is currently building about 52 of the 737 Max planes a month.</small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default QuizCard3