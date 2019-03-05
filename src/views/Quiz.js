import React, { Component } from 'react'
import '../App.css'

class Quiz extends Component {
    render() {
        return (
            <div>
                <div class="container pt-4">
                    <div class="row">

                        <div class="col-2">

                            <p>5 / 10</p>
                            <div class="progress">
                                <div class="progress-bar w-50" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div class="col-8">
                            <div class="card text-left h-100 mb-1 pb-1 shadow">
                                <div class="card-body">
                                    <h5 class="card-title">FANTASTIC! TRUMP'S 7 POINT PLAN To Reform Healthcare Begins With A Bombshell!</h5>
                                    <h6 class="card-subtitle font-weight-normal text-muted">
                                        100percentfedup.com
                                    </h6>
                                    <p class="card-text">
                                        <small>
                                            Email HEALTHCARE REFORM TO MAKE AMERICA GREAT AGAIN
        Since March of 2010, the American people have had to suffer under the incredible economic burden of the Affordable Care Act Obamacare. This legislation, passed by totally partisan votes in the House and Senate and signed into law by the most divisive and partisan President in American history, has tragically but predictably resulted in runaway costs, websites that don't work, greater rationing of care, higher premiums, less competition and fewer choices. Obamacare has raised the economic uncertainty of every single person residing in this country. As it appears Obamacare is certain to collapse of its own weight, the damage done by the Democrats and President Obama, and abetted by the Supreme Court, will be difficult to repair unless the next President and a Republican congress lead the effort to bring much-needed free market reforms to the healthcare industry.
                                        </small>
                                    </p>
                                </div>
                                <div class="card-body align-self-center">
                                    <button
                                        class="btn btn-primary mr-5"
                                    >REAL</button
                                    >
                                    <button
                                        class="btn btn-danger ml-5"
                                    >FAKE</button
                                    >
                                </div>
                            </div>


                        </div>


                        <div class="col-2">
                            <button
                                onClick=""
                                class="btn btn-outline-info btn-sm"
                            >Hint</button
                            >
                        </div>

                    </div>
                </div>
                <p></p>
            </div>
        )
    }
}

export default Quiz