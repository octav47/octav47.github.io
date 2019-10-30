import React, { Component } from 'react'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Navbar from 'react-bootstrap/esm/Navbar'
import Badge from 'react-bootstrap/esm/Badge'

import Container from './components/Container'
import PumpBlock from './components/PumpBlock'
import Status from './components/Status'

import pumpService from './services/Pump.js'

import pkg from '../package.json'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			scheduled: false,
			manual: false,
		}

		this.interval = null
	}

	componentDidMount() {
		this.createInterval()
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	createInterval = () => {
		this.interval = setInterval(() => {
			this.handleUpdateStatus()
		}, 5000)
	}

	handleUpdateStatus = async () => {
		const status = await pumpService.status()

		this.setState({
			scheduled: status.scheduled,
			manual: status.manual,
		})
	}

	handlePumpStart = async () => {
		const status = await pumpService.start()

		this.setState({
			scheduled: status.scheduled,
			manual: status.manual,
		})
	}

	handlePumpStop = async () => {
		const status = await pumpService.stop()

		this.setState({
			scheduled: status.scheduled,
			manual: status.manual,
		})
	}

	render() {
		const { scheduled, manual } = this.state

		return (
			<>
				<Navbar bg="dark" variant="dark">
					<Navbar.Brand>
						WaterPump <Badge variant="success">{pkg.version}</Badge>
					</Navbar.Brand>
				</Navbar>
				<Container>
					<Row>
						<Status />
					</Row>
					<Row>
						<Col lg="2" md="4" sm="6" xs="12">
							<PumpBlock
								pumping={scheduled || manual}
								onPumpStart={this.handlePumpStart}
								onPumpStop={this.handlePumpStop}
							/>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default App
