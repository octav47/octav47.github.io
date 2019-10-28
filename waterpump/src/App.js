import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Navbar from 'react-bootstrap/esm/Navbar'
import Badge from 'react-bootstrap/esm/Badge'

import Block from './components/Block'
import Status from './components/Status'

import pkg from '../package.json'

const App = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Navbar.Brand>
					WaterPump <Badge variant="success">{pkg.version}</Badge>
				</Navbar.Brand>
			</Navbar>
			<Container fluid>
				<Row>
					<Status />
				</Row>
				<Row>
					<Col lg="2" md="4" sm="6" xs="12">
						<Block />
					</Col>
					<Col lg="2" md="4" sm="6" xs="12">
						2
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default App
