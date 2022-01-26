import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Block from "./Block";

import windowService from "../services/Window";

const ActionButton = ({ onClick, children }) => {
  return (
    <Button block size="lg" variant="success" onClick={onClick}>
      {children}
    </Button>
  );
};

export class WindowBlock extends Component {
  render() {
    return (
      <Block>
        <Row>
          <Col>
            <p>
              <ActionButton onClick={() => windowService.open()}>
                Open
              </ActionButton>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <ActionButton onClick={() => windowService.stop()}>
                Stop
              </ActionButton>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <ActionButton onClick={() => windowService.close()}>
                Close
              </ActionButton>
            </p>
          </Col>
        </Row>
      </Block>
    );
  }
}
