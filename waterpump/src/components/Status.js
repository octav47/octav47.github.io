import React, { Component } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Alert from 'react-bootstrap/esm/Alert'

import apiService from '../services/Api.js'

class Status extends Component {
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
		const status = await apiService.getStatus()

		this.setState({
			scheduled: status.scheduled,
			manual: status.manual,
		})
	}

	render() {
		const { scheduled, manual } = this.state

		return (
			<>
				<Col sm="6" xs="6">
					<Alert variant="secondary">
						Scheduled: {scheduled ? 'on' : 'off'}
					</Alert>
				</Col>
				<Col sm="6" xs="6">
					<Alert variant="secondary">Manual: {manual ? 'on' : 'off'}</Alert>
				</Col>
			</>
		)
	}
}

export default Status
