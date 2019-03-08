import React, { Component } from 'react'
import '../App.css'
//import { func } from 'prop-types';

class Verify extends Component {

    check = () => {
        if (document.getElementById("link") === "TEST VALID") {
            this.fakealert();
        } else {
            this.safealert();
        }
    }
    
    fakealert = () => {
        document.getElementById("red-alert").hidden = false;
    }
    
    safealert = () => {
        document.getElementById("red-alert").hidden = false;
    }

    render() {
        return (
            <div>
                <div hidden id="red-alert">
                    Alert!
                </div>
                <div>
                    Link of the news:<br />
                    <input type="text" id="link" name="link" />
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
                    <button className="mt-4 btn btn-warning" onClick="check()">quick check</button>
                </div>
            </div>
        )
    }
}

export default Verify