import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import "../components/main.scss"

export const HotelPageTemplate = ({
	title,
	image,
	brand,
	description,
	destination_img,
	destination_name,
	destination_description,
}) => (
	<React.Fragment>
		<div 
			className="h-100 w-100"
		>

		</div>
	</React.Fragment>
)

HotelPageTemplate.propTypes = {
	title: PropTypes.string,
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	brand: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	description: PropTypes.string,
	destination_img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	destination_name: PropTypes.string,
	destination_description: PropTypes.string,
}

const HotelPage = ({data}) => {
	const { frontmatter } = data.markdownRemark
	console.log(data)
	return (
		<Layout>
			<HotelPageTemplate 
				title={ frontmatter.title }
				image={ frontmatter.image }
				brand={ frontmatter.brand }
				description={ frontmatter.description }
				destination_img={ frontmatter.destination_img }
				destination_name={ frontmatter.destination_name }
				destination_description={ frontmatter.destination_description }
			/>
		</Layout>
	)
}

HotelPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		})
	})
}

export default HotelPage

export const HotelPageQuery = graphql`
	query HotelPage($id: String!) {
		markdownRemark(id: {eq: $id }) {
			id
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

