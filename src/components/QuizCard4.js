import React, { Component } from 'react';

class QuizCard4 extends Component {

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
                        <h5 className="card-title">Top US Admiral Fired For Questioning Obama Purchase Of Mansion In Dubai</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            By Sorcha Faal on whatdoesitmeans.com, 2016-01-10
                        </h6>
                        <p className="card-text pt-2">
                            <small>
                                A stunning new Foreign Intelligence Service (SVR) report circulating in the Kremlin today states that one of the
                                United States Navy’s top commanders was relieved of his command a few hours ago after he sent out an “email/posting”
                                revealing that President Barack Obama was in the process of purchasing a multi-million dollar seaside luxury villa in
                                the United Arab Emirates city (UAE) of Dubai.  According to this report, the Commander of the US Navy’s
                                Carrier Strike Group 15, Rear Admiral Rick Williams, posted a “pointed” query on 8 January [since deleted]
                                 to the US Naval Institute’s “Readiness Kill Chain” “recipients/responders” list as to why Navy security and
                                  intelligence personal had been dispatched from Naval Support Facility Thurmont (aka Camp David) to Dubai on
                                   what he termed an “Obama house hunting mission”.
                                   Within 18 hours of Admiral Williams posting this query, this report continues, the US Navy's Third Fleet
                                   Commander, Vice Admiral Nora Tyson, acting on direct orders from her Commander-In-Chief, President Barack
                                   Obama, fired Admiral Williams stating her action was “due to a loss of confidence in his ability to
                                   command” because of “allegations of his misuse of government computer equipment”.
                                    When further questioned by Russian Today journalists via email to provide more details 
                                    about Admiral Williams firing, this report notes, the Pentagon failed to reply—but then 
                                    began releasing “anonymous” stories to the US press that Admiral Williams had been viewing
                                     pornography on his computer.
                               </small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default QuizCard4