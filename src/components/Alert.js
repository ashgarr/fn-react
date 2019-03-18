import React, { Component } from 'react';

class Alert extends Component {

    render() {
        let classes= "mt-4 alert"
        if (this.props.danger) {
            classes += " alert-danger"
        } else {
            classes += " alert-info"
        }
        return (
            <div className={classes}>
                {this.props.alertText}
            </div>
        )
    }
}

export default Alert;