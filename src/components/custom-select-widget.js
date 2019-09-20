import CMS from 'netlify-cms-app'
import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Immutable, { Map, List } from 'immutable'

class CustomSelect extends React.Component{
	render() {
		const { data } = this.props
		const { edges: hotels } = data.allMarkdownRemark
		
		return (
			<select>
				{hotels &&
					hotels.map(({node: hotel}) => (
						<option>{hotel.frontmatter.title}</option>
					))
				}
			</select>
		)
	}
}

export default () => (

	<StaticQuery 
		query={graphql`
			query HotelsQuery {
				allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
					edges {
						node {
							frontmatter {
								title
							}
						}
					}
				}
			}
		`}
		render={(data) => <CustomSelect data={data} />}
	/>

)