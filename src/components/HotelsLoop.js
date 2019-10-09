import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export class HotelsLoop extends React.Component {

	render() { 
		const { data } = this.props
		const { edges: hotels } = data.allMarkdownRemark
		var count = 0

		return(
			<div>
				{hotels &&
					hotels.map(({ node: hotel }) => {
						count ++
						return (
							<MDBRow key={hotel.id} className="no-gutters px-3 px-sm-3 px-lg-0 index-item">
					     		<MDBCol lg="6" className={ !(count%2)? 'order-lg-2' : '' }>
						        	<Img fluid={hotel.frontmatter.image.childImageSharp.fluid} />
						      	</MDBCol>
						      	<MDBCol lg="6" middle className="align-items-center">
							        <div className={`w-75 text-center ${ !(count%2)? 'float-right mr-lg-5' : 'ml-lg-5' }`}>
							         	<h2 className='text-center'>{hotel.frontmatter.description_title}</h2>
								    	<p className='text-justify'>{hotel.frontmatter.description}</p>
								    	<MDBBtn style={{backgroundColor: '#004660 !important'}}>Ver más</MDBBtn>
							        </div>
						      	</MDBCol>
						    </MDBRow>
						)
					})
				}
			</div>
		)
	}
}

HotelsLoop.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
}

export default () => (
  <StaticQuery
    query={graphql`
      	query MyQuery {
		  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "hotel-page"}}}) {
		    edges {
		      node {
		        id
		        frontmatter {
		          description_title
		          description
		          image{
		            childImageSharp {
		            	fluid(maxWidth: 960, quality: 100) {
		            		...GatsbyImageSharpFluid
		            	}
		            }
		          }
		        }
		      }
		    }
		  }
		}
    `}
    render={(data) => <HotelsLoop data={data} />}
  />
)