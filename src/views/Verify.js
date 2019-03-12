import React, { Component } from 'react'
import '../App.css'
import Alert from '../components/Alert'
//import { func } from 'prop-types';

class Verify extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alert: false,
            link: ''
        }
    }

    alertSwap = (s) => {
        if (s === 'TEST VALUE') {
            this.setState({alert: true})
        } else {
            this.setState({alert: false})
        }
    }

    handleLinkEdit = (e) => {
        this.setState({link: e.target.value});
        this.alertSwap(e.target.value)
    }

    render() {
        return (
            <div>
                { this.state.alert && <Alert /> }
                <div>
                    Link of the news:<br />
                    <input type="text" id="link" name="link" value={this.state.link} onChange={this.handleLinkEdit}/>
                    <br />
                    Author of the news:<br />
                    <input type="text" name="author" />
                    <br />
                    Title of the news:<br />
                    <input type="text" name="title" />
                    <br />
                    Content of the news:<br />
                    <input type="text" name="content" />
                    <br />
                    <button className="mt-4 btn btn-warning">quick check</button>
                </div>
            </div>
        )
    }
}

export default Verify