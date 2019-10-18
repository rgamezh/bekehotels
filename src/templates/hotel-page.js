import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import "../components/main.scss"

export const HotelPageTemplate = () => (
	<div>
		<div 
			className="h-100 w-100"
		>
		</div>
	</div>
)

const HotelPage = () => {
	return (
		<Layout>
			<HotelPageTemplate />
		</Layout>
	)
}

export default HotelPage

export const HotelPageQuery = graphql`
	query HotelPage($id: String!) {
		markdownRemark(id: {eq: $id }) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 1920, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				brand {
					childImageSharp {
						fluid(maxWidth:600) {
							...GatsbyImageSharpFluid
						}
					}
				}
				description
				destination_img {
					childImageSharp {
						fluid(maxWidth: 1024) {
							...GatsbyImageSharpFluid
						}
					}
				}
				destination_name
				destination_description
			}
		}
	}
`

