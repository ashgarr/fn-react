import React, { Component } from 'react';

class Alert extends Component {

    render() {
        return (
            <div id="red-alert">
                {this.props.alertText}
            </div>
        )
    }
}

export default Alert;