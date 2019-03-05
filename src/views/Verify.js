import React, { Component } from 'react'
import '../App.css'
import form from "react-bootstrap/Form"
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

    }
    
    safealert = () => {
    
    }

    render() {
        return (
            <div>
                <div hidden id="red-alert">
                    Alert!
                </div>
                <form>
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
                    <button class="mt-4 btn btn-warning">quick check</button>
                </form>
            </div>
        )
    }
}

export default Verify