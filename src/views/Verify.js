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
        //var t = this.searcher();
        var t = this.noCsvSearcher();
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
        var count = 0;
        var site = false;
        var author = false;
        var title = false;
        var content = false;
        var type = 0 // 0: none 1: bias 2: lie

        return this.alertStruct(count, site, author, title, content, type);
    }

    noCsvSearcher = () => {
        var count = 0;
        var site = false;
        var author = false;
        var title = false;
        var content = false;
        var type = 0 // 0: none 1: bias 2: lie

        if (this.state.link === "yeet.com") {
            site = true;
            count++;
        }

        if (this.state.author === "Ben Shapiro") {
            author = true;
            count++;
        }

        if (this.state.title === "TEST") {
            title = true;
            count++;
        }

        if (this.state.content === "liez") {
            content = true;
            count++;
        }

        return this.alertStruct(count, site, author, title, content, type);
    }

    alertStruct = (count, site, author, title, content, type) => {
        if (count !== 0) { // changing this.count to count fixes this line; need to double check why
            this.message = 'Flags have been raised on the '
            
            if (site) {
                this.message = this.message + ', site'
            }

            if (author) {
                this.message = this.message + ', author'
            }

            if (title) {
                this.message = this.message + ', title'
            }

            if (content) {
                this.message = this.message + ', content'
            }

            this.message = this.message + '. Use caution with this article.'
        } else {
            this.message = 'This article doesn\'t appear in our system, and should be safe to use.'
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

    // PAGE CONTENT

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
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitleEdit} />
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