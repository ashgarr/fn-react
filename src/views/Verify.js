import React, { Component } from 'react'
import '../App.css'
import Alert from '../components/Alert'
//import { func } from 'prop-types';

class Verify extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alert: false,
            link: '',
            author: '',
            title: '',
            content: ''
        }
    }

    alertSwap = () => {
        if (this.state.link !== '') {
            this.setState({alert: true})
        } else {
            this.setState({alert: false})
        }
    }

    go = () => {
        // loader/click blocker
        // database search
        // alert builder
        // alert
        this.alertSwap();
    }

    // Form edit handlers

    handleLinkEdit = (e) => {
        this.setState({link: e.target.value});
    }

    handleAuthorEdit = (e) => {
        this.setState({author: e.target.value});
    }

    handleTitleEdit = (e) => {
        this.setState({title: e.target.value});
    }

    handleContentEdit = (e) => {
        this.setState({content: e.target.value});
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
                    <input type="text" name="author" value={this.state.author} onChange={this.handleAuthorEdit} />
                    <br />
                    Title of the news:<br />
                    <input type="text" name="title" value={this.state.title} onChange={this.handleAuthorEdit} />
                    <br />
                    Content of the news:<br />
                    <input type="text" name="content" value={this.state.content} onChange={this.handleContentEdit} />
                    <br />
                    <button className="mt-4 btn btn-warning" onClick={this.go} >quick check</button>
                </div>
            </div>
        )
    }
}

export default Verify