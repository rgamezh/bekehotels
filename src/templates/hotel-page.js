import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import Loop from '../components/Loop'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"; 
import "../components/main.scss"

export const HotelPageTemplate = ({
	title,
	image,
	brand,
	description,
	destination_img,
	destination_name,
	destination_description,
	rooms
}) => (
	<React.Fragment>
		<div 
			className="cover-image"
			style={{
				backgroundImage: `url(${
					!!image.childImageSharp ? image.childImageSharp.fluid.src : image
				})`,
				backgroundAttachment: 'fixed'
			}}
		>
		</div>
		<MDBContainer className="d-flex cover-image flex-column justify-content-center align-items-center flex-column">
			<Img className="brand-image" fluid={brand.childImageSharp.fluid} />
			<p className="text-center">
				{description}
				{console.log('count: ' + rooms.edges.length)}
			</p>
		</MDBContainer>
		<Loop loop={rooms} />
		<MDBRow className="no-gutters">
			<MDBCol lg="6" className={ rooms.edges.length%2? 'order-lg-2' : ''}>
				<Img fluid={destination_img.childImageSharp.fluid} />
			</MDBCol>
			<MDBCol middle lg="6">
				<div className={`w-75 text-center ${ rooms.edges.length%2? 'float-right mr-lg-5' : 'ml-lg-5' }`}>
					<h3>
						{destination_name}
					</h3>
					{destination_description.split('\n').map((item, key) => {
						return <p className="text-justify" key={key}>{item}</p>
					})}
				</div>
			</MDBCol>
		</MDBRow>
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
	const rooms = data.rooms
	const { frontmatter } = data.markdownRemark
	console.log(rooms)
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
				rooms={rooms}
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
	query HotelPage($id: String!, $hotel: String!) {
		rooms: allMarkdownRemark(filter: {frontmatter: {hotel: {eq: $hotel}}}){
			edges {
				node {
					id
					frontmatter {
						title
						description
						image {
							childImageSharp {
								fluid(maxWidth: 960, quality: 100){
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
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

