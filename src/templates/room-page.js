import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import '../components/main.scss'

export const RoomPageTemplate = ({}) => (
	<h1>Works!</h1>
)

const RoomPage = ({}) => {
	return (
		<Layout>
			<RoomPageTemplate />
		</Layout>
	)
}

export default RoomPage





