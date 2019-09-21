import React from 'react'
import { Link } from 'gatsby'

import { MDBContainer, MDBFooter, MDBRow, MDBCol } from "mdbreact";

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
		<MDBFooter style={{backgroundColor: '#004660'}} className="font-small pt-4 mt-0">
		  <MDBContainer className="text-center text-md-left">
		    <MDBRow>
		      <MDBCol md="4">
		        <h5 className="title">Footer Content</h5>
		        <p>
		          Here you can use rows and columns here to organize your footer
		          content.
		        </p>
		      </MDBCol>
		      <MDBCol md="4">
		        <h5 className="title">Links</h5>
		        <ul>
		          <li className="list-unstyled">
		            <a href="#!">Link 1</a>
		          </li>
		          <li className="list-unstyled">
		            <a href="#!">Link 2</a>
		          </li>
		          <li className="list-unstyled">
		            <a href="#!">Link 3</a>
		          </li>
		          <li className="list-unstyled">
		            <a href="#!">Link 4</a>
		          </li>
		        </ul>
		      </MDBCol>
		      <MDBCol md="4">
		      <h5 className="title">Siguenos</h5>
		      </MDBCol>
		    </MDBRow>
		  </MDBContainer>
		  <div className="footer-copyright text-center py-3">
		    <MDBContainer fluid>
		      &copy; {new Date().getFullYear()} Copyright: <a href="http://www.creanddo.com"> creanddo.com </a>
		    </MDBContainer>
		  </div>
		</MDBFooter>
    )
  }
}

export default Footer
