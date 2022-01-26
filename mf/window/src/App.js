import React, { Component } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Navbar from "react-bootstrap/esm/Navbar";
import Badge from "react-bootstrap/esm/Badge";

import Container from "./components/Container";
import Status from "./components/Status";

import windowService from "./services/Window";

import pkg from "../package.json";

import { WindowBlock } from "./components/WindowBlock";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: null
    };

    this.interval = null;
  }

  componentDidMount() {
    this.createInterval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  createInterval = () => {
    this.interval = setInterval(() => {
      this.handleUpdateStatus();
    }, 1000);
  };

  handleUpdateStatus = async () => {
    const status = await windowService.getStatus();

    this.setState({
      direction: status.direction
    });
  };

  render() {
    const { direction } = this.state;

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            Window <Badge variant="success">{pkg.version}</Badge>
          </Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Status direction={direction} />
          </Row>
          <Row>
            <Col lg="2" md="4" sm="6" xs="12">
              <WindowBlock />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
