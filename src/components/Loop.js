import React from 'react'
import PropTypes from 'prop-types'
import { Link, navigate, } from 'gatsby'
import Img from 'gatsby-image'
import deburr from 'lodash/deburr'

import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export default class Loop extends React.Component {

	render() { 
		const { loop } = this.props
		const { edges: items } = loop
		const hotelSlug = this.props.hotelSlug
		let count = 0
		return(
			<React.Fragment>
				{items &&
					items.map(({ node: item }) => {
						count ++
						return (
							<MDBRow key={item.id} className="no-gutters px-3 px-sm-3 px-lg-0 index-item">
					     		<MDBCol lg="6" className={ !(count%2)? 'order-lg-2' : '' }>
						        	<Img style={{height: '450px'}} fluid={item.frontmatter.image.childImageSharp.fluid} />
						      	</MDBCol>
						      	<MDBCol lg="6" middle className="align-items-center">
							        <div className={`w-75 text-center ${ !(count%2)? 'float-right mr-lg-5' : 'ml-lg-5' }`}>
							         	<h2 className='text-center'>{item.frontmatter.title}</h2>
								    	<p className='text-justify'>{item.frontmatter.description}</p>
								    	<MDBBtn 
								    		onClick={e => {
								    			e.preventDefault()
								    			hotelSlug?
								    				navigate(deburr(`/${hotelSlug}/${item.fields.slug}`))
								    			: 
								    				navigate(deburr(item.fields.slug))
								    		}} 
								    		color="primary" 
								    		style={{backgroundColor: '#004660 !important'}}
								    	>
								    		Ver más
								    	</MDBBtn>
							        </div>
						      	</MDBCol>
						    </MDBRow>
						)
					})
				}
			</React.Fragment>
		)
	}
}

Loop.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
}