import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'

import Block from './Block'

class PumpBlock extends Component {
	render() {
		const { pumping, onPumpStart, onPumpStop } = this.props

		return (
			<Block title="Pumping">
				<Button
					variant={pumping ? 'danger' : 'success'}
					onClick={pumping ? onPumpStop : onPumpStart}
				>
					{pumping ? 'Stop' : 'Launch'}
				</Button>
			</Block>
		)
	}
}

export default PumpBlock
