import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import HotelsLoop from '../components/HotelsLoop'
import "../components/main.scss"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export const IndexPageTemplate = ({
  heroImage,
  logoWayak,
  descriptionImage,
  logoBeke,
  bacalar,
  hotels,
}) => (
  <div>
    <div 
      style={{
        height: '100vh',
        backgroundImage: `url(${
          !!heroImage.childImageSharp ? heroImage.childImageSharp.fluid.src : heroImage
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <MDBContainer className='h-100'>
        <div className="d-flex h-100 justify-content-center align-items-center flex-column">
          <Img style={{maxWidth: '254px', width: '100%', marginBottom: '30px'}} fluid={logoWayak.childImageSharp.fluid} />
          <MDBBtn outline color='white'>Ver Ahora</MDBBtn>
        </div>
      </MDBContainer>
    </div>
    <div 
      style={{
        height: '100vh',
        backgroundImage: `url(${
          !!descriptionImage.childImageSharp ? descriptionImage.childImageSharp.fluid.src : descriptionImage
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <MDBContainer className='h-100'>
        <div className="d-flex h-100 justify-content-center align-items-center flex-column">
          <Img style={{width: '76px', marginBottom: '27px'}} fluid={logoBeke.childImageSharp.fluid} />
          <p className='text-center white-text'>
            Grupo béke hotels es una excelente opción para pasar unas vacaciones en familia en el mejor destino turístico de México,
            ya que ofrece todas las facilidades para hacer de tu estancia una experiencia inolvidable: cómodas habitaciones, espectacular restaurante, club de playa y una excepcional ubicación.
          </p>
          <p className='text-center white-text'>
            Béke Hotels Group is an excellent option to spend a family holiday in the best tourist destination in Mexico, as it offers all the facilities to make your stay an unforgettable experience:
            comfortable rooms, spectacular, restaurant, beach club and an exceptional location .
          </p>
        </div>
      </MDBContainer>
    </div>
    <div style={{margin: '50px 0'}}>
      <h1 className="text-center">Nuestros Hoteles</h1>
      <span style={{width: '200px', height: '3px', display: 'block', backgroundColor: '#004660', margin: '0 auto'}}></span>
    </div>
  
    <HotelsLoop />

    <MDBRow className="no-gutters px-3 px-sm-3 px-lg-0 index-item">
      <MDBCol lg="6" middle className='align-items-center'>
        <div className='w-75 float-right mr-lg-5 text-center'>
          <p style={{fontSize: '30px'}} className='float-lg-right text-center'>
             Regístrate y te enviaremos las mejores ofertas para ti
          </p>
          <input placeholder='E-mail' type="text" id="example1" className="form-control form-control-lg text-center" />
        </div>  
      </MDBCol>
      <MDBCol lg="6">
        <Img fluid={bacalar.childImageSharp.fluid} />
      </MDBCol>
    </MDBRow>
    <MDBRow className="no-gutters px-3 px-sm-3 px-lg-0 index-item">
      <MDBCol lg="6">
        <iframe src="https://www.google.com/maps/d/embed?mid=1S1U0PHEcD-T41WIKnLXQBS-0j5n_c5-t" width="100%" height="384.54"></iframe>
      </MDBCol>
      <MDBCol lg="6" middle className='align-items-center'>
        <div className='w-75 ml-lg-5 text-center'>
          <h2 className='text-center'>LOCACIONES</h2>
          <p className='text-justify'>
            Disfruta los destinos más increíbles de la península de Yucatán y el estado de Quintana Roo
            en los hoteles que Béke Hotels tiene a tu disposición para que puedas relajarte.
          </p>
        </div>
      </MDBCol>
    </MDBRow>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const heroImage = data.heroImage
  const logoWayak = data.logoWayak
  const descImage = data.descImage
  const beke = data.beke
  const bacalar = data.bacalar
  console.log(data)
  return (
    <Layout>
      <IndexPageTemplate
        heroImage={heroImage}
        logoWayak={logoWayak}
        descriptionImage={descImage}
        logoBeke={beke}
        bacalar={bacalar}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    bacalar: file(relativePath: { eq: "bacalar.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beke: file(relativePath: { eq: "beke.png" }){
      childImageSharp {
        fluid(maxWidth: 76) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    descImage: file(relativePath: { eq: "desc-background.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImage: file(relativePath: { eq: "home.png" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoWayak: file(relativePath: { eq: "logo-wayak.png" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
