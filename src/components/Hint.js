import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'

class Hint extends Component {

  constructor(...args) {
    super(...args);

    this.attachRef = target => this.setState({ target });
    this.state = {
      show: false,
    };
  }

  render() {
    const { show, target } = this.state;
    return (
      <>
        <Button
          variant="outline-info"
          size="sm"
          ref={this.attachRef}
          onClick={() => this.setState({ show: !show })}
        >
          Hint
        </Button>
        <Overlay target={target} show={show} placement="bottom">
          {({ placement, scheduleUpdate, arrowProps, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(100, 100, 100, 0.85)',
                padding: '4px 15px',
                margin: '0.5em 0 0 0',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
              Pay attention to
              <br />
               the use of language
            </div>
          )}
        </Overlay>
      </>
    );
  }

}
export default Hint