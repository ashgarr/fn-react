import React, { Component } from 'react'
import '../App.css'
import form from "react-bootstrap/Form"

class Verify extends Component {
    render() {
        return (
            <div>
                <form>
                    Link of the news:<br />
                    <input type="text" name="link" />
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