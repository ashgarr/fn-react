import React, { Component } from 'react';

class QuizCard8 extends Component {

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
                        <h5 className="card-title">NOW IT’S OFFICIAL: FDA Announced That Vaccines Are Causing Autism!</h5>
                        <h6 className="card-subtitle font-weight-normal text-muted">
                            transcend.org, 2017-11-18
                        </h6>
                        <p className="card-text pt-2">
                            <small>
                                The FDA inadvertently admitted that autism is a potential adverse side-effect of the DTap 
                                vaccine in an accompanying online pamphlet. The pamphlet has since been deleted from the FDA’s website 
                                adding to the animosity surrounding the subject.
    
                                For years, fears over vaccines and the onset of autism have been dispelled by medical professionals, 
                                but this has all changed.
    
                                The FDA has published conclusive proof 
                                on their website that the DTap vaccine, made by Sanofi Pasteur Inc can cause autism. According to the 
                                FDA’s online Biologics Blood Vaccines document, the vaccine manufacturer admits on its package insert 
                                that their vaccination can cause autism as one of many adverse reactions.
    
                                The FDA have (unsurprisingly) removed the incriminating article from their website but luckily, 
                                screenshots of the online documents remain all over the internet.</small>
                        </p>
                    </div>
                </div>
            </>
        );
    }

}
export default QuizCard8