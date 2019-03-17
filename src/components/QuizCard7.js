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
                        <h5 className="card-title">US election 2016 result: Trump beats Clinton to take White House</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            bbc.com, 2016-11-09
                        </h6>
                        <p className="card-text pt-2">
                            <small> 
                            Donald Trump will become the 45th US president after a stunning victory over Democrat Hillary Clinton.

The Republican said he would serve all Americans and called for the country to unite, following a divisive campaign which saw him beset by controversies.

Hillary Clinton is due to appear in New York for her first public statement since conceding to Mr Trump in a telephone call on Tuesday evening.

Outgoing President Barack Obama has congratulated his successor by phone.

Mr Obama invited Mr Trump to a meeting at the White House on Thursday to discuss the transition.
When Mr Trump is sworn in as president in January, he will have the benefit of a Republican majority in both houses of Congress, as the party unexpectedly retained control of both the Senate and the House of Representatives.

The Republican nominee defied pre-election polling to claim swing states, winning the key battlegrounds of Florida, Ohio and Pennsylvania.

The president-elect told cheering supporters that Americans must now "bind the wounds of division", after a gruelling, acrimonious electoral battle.

"I want to tell the world community that while we will always put America's interests first, we will deal fairly with everyone," he said.
                            </small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default QuizCard7