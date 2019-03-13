import React, { Component } from 'react'
import '../App.css'
import Alert from '../components/Alert'
//import { func } from 'prop-types';

class Verify extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alert: false,
            blockButton: false,
            alertText: '',
            link: '',
            author: '',
            title: '',
            content: ''
        }
    }

    alertSwap = (message) => {
        if (this.message !== '') {
            this.setState({alertText: message});
        } else {
            this.setState({alertText: 'Alert'})
        }
        if (this.state.link !== '') {
            this.setState({alert: true});
        } else {
            this.setState({alert: false});
        }
    }

    go = () => {
        // loader/click blocker
        this.loader();
        // database search
        this.searcher();
        // alert builder
        var t = this.alertStruct();
        // alert
        this.alertSwap(t);
        this.unlock();
    }

    loader = () => {
        this.setState({blockButton: true});
        // add spinner here
    }

    searcher = () => {
        // will rig up to csv
    }

    alertStruct = (site, author, title, content, count, type) => {
        if (this.count !== 0) {
            this.message = 'Flags have been raised on the '
            
            if (site) {
                this.message = this.message + 'site '
            }

            if (author) {
                this.message = this.message + 'author '
            }

            if (title) {
                this.message = this.message + 'title '
            }

            if (content) {
                this.message = this.message + 'content '
            }

            this.message = this.message + '. Use caution with this article.'
        } else {
            this.message = 'this doesn\'t appear in our system, and should be fine.'
        }

        return this.message;
    }

    unlock = () => {
        this.setState({blockButton: false});
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
                { this.state.alert && <Alert alertText={this.state.alertText}/> }
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
                    <button className="mt-4 btn btn-warning" onClick={this.go} disabled={this.state.blockButton}>quick check</button>
                </div>
            </div>
        )
    }
}

export default Verify