import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Alert from "react-bootstrap/esm/Alert";

class Status extends Component {
  render() {
    const { direction } = this.props;

    return (
      <>
        <Col lg="2" md="4" sm="6" xs="6">
          <Alert variant="secondary">
            Direction: {direction ? direction : "Stopped"}
          </Alert>
        </Col>
      </>
    );
  }
}

export default Status;
