import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import Loop from '../components/Loop'
import "../components/main.scss"
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";

export const IndexPageTemplate = ({
  frontmatter,
  slides,
  bacalar,
  introduction,
  hotels,
}) => (
  <React.Fragment>
    <MDBCarousel
      activeItem={1}
      length={slides.length}
      showControls={true}
      showIndicators={true}
      style={{height: '100vh'}}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        {slides&&
          slides.map((slide) => (
            <MDBCarouselItem itemId={slides.indexOf(slide) + 1} key={slides.indexOf(slide)}>
              <MDBView>
                <div 
                  style={{
                    height: '100vh',
                    backgroundImage: `url(${
                      !!slide.image.childImageSharp ? slide.image.childImageSharp.fluid.src : slide.image
                    })`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <MDBContainer className='h-100'>
                    <div className="d-flex h-100 justify-content-center align-items-center flex-column">
                      <Img style={{maxWidth: '254px', width: '100%', marginBottom: '30px'}} fluid={slide.icon.childImageSharp.fluid} />
                      <MDBBtn outline color='white'>Ver Ahora</MDBBtn>
                    </div>
                  </MDBContainer>
                </div>
              </MDBView>
            </MDBCarouselItem>
          ))
        }
      </MDBCarouselInner>
    </MDBCarousel>
    <div 
      style={{
        height: '100vh',
        backgroundImage: `url(${
          !!introduction.image.childImageSharp ? introduction.image.childImageSharp.fluid.src : introduction.image
        })`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <MDBContainer className='h-100'>
        <div className="d-flex h-100 justify-content-center align-items-center flex-column">
          <Img style={{width: '76px', marginBottom: '27px'}} fluid={introduction.icon.childImageSharp.fluid} />
          {introduction.introCaption.split('\n').map((item, key) => {
            return <p className={'text-center white-text'} key={key}>{item}</p>
          })}
        </div>
      </MDBContainer>
    </div>
    <div style={{margin: '50px 0'}}>
      <h1 className="text-center">{frontmatter.title}</h1>
      <span style={{width: '200px', height: '3px', display: 'block', backgroundColor: '#004660', margin: '0 auto'}}></span>
    </div>
  
    <Loop loop={hotels}/>

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
  </React.Fragment>
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
  const { slides } = frontmatter.header
  const { introduction } = frontmatter.header
  const hotels = data.hotels
  const bacalar = data.bacalar
  return (
    <Layout>
      <IndexPageTemplate
        frontmatter={frontmatter}
        slides={slides}
        bacalar={bacalar}
        introduction={introduction}
        hotels={hotels}
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
    hotels: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "hotel-page"}}}) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid (maxWidth: 960, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        header {
          slides {
            image {
              childImageSharp {
                fluid(maxWidth:1920, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            icon {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            caption
          }
          introduction {
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            icon{
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            introCaption 
          }
        }
      }
    }
  }
`
