import React from 'react'
import styled from 'styled-components'
import C from 'react-bootstrap/esm/Container'

const Wrapper = styled(C)`
	padding-top: 15px;
	padding-bottom: 15px;
`

const Container = ({ children }) => <Wrapper fluid>{children}</Wrapper>

export default Container
