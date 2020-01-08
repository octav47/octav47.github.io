import React from 'react'
import Card from 'react-bootstrap/esm/Card'

const Block = ({ title, children }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				{children}
			</Card.Body>
		</Card>
	)
}

export default Block
