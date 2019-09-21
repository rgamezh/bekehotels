import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, } from 'gatsby'
import Img from "gatsby-image"

import Layout from '../components/Layout'
import "../components/main.scss"
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  heroImage,
  logoWayak,
  descriptionImage,
  logoBeke,
  wayakHotel,
  bekeHotel,
  casaMaya,
  bacalar,
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
  
    <MDBRow className="no-gutters">
      <MDBCol>
        <Img fluid={wayakHotel.childImageSharp.fluid} />
      </MDBCol>
      <MDBCol middle className='align-items-center'>
        <div className='w-75 ml-md-5 text-center'>
          <h2 className='text-center'>HOTEL WAYAK BACALAR</h2>
          <p className='text-justify'>
            Hotel Wayak Bacalar-Todo Incluido, al estar rodeado de naturaleza crea un entorno de exclusividad lejos de todo lo cotidiano. Podrás disfrutar de la increíble laguna de Bacalar a unos cuantos pasos de tu habitación. 
            Además, por nuestra ubicación y su arena blanca, no podrás diferenciarla del mar. Por la noche disfrutarás del cielo estrellado como nunca antes lo habías visto. Tu habitación, nuestro personal y el ambiente te harán experimentar las mejores vacaciones con pareja, familia o amigos.
          </p>
          <MDBBtn style={{backgroundColor: '#004660 !important'}}>Ver más</MDBBtn>
        </div>
      </MDBCol>
    </MDBRow>
    <MDBRow className="no-gutters">
      <MDBCol middle className='align-items-center'>
        <div className='w-75 float-right mr-md-5 text-center'>
          <h2 className='text-center'>HOTEL BÉKE MAHAHUAL</h2> 
          <p className='text-justify'>
            El ambiente y ubicación de Hotel Béke hará que experimentes una sensación de paz y relajación total. Por la mañana disfrutarás de una increíble vista del amanecer detrás del mar caribe y por la tarde el atardecer de lado del manglar. Todo esto, 
            complementado con habitaciones cómodamente equipadas para hacer de tu experiencia con nosotros algo inolvidable.
          </p>
          <MDBBtn style={{backgroundColor: '#004660 !important'}}>Ver más</MDBBtn>
        </div>
      </MDBCol>
      <MDBCol>
        <Img fluid={bekeHotel.childImageSharp.fluid} />
      </MDBCol>
    </MDBRow>
    <MDBRow className="no-gutters">
      <MDBCol>
        <Img fluid={casaMaya.childImageSharp.fluid} />
      </MDBCol>
      <MDBCol middle className='align-items-center'>
        <div className='w-75 ml-md-5 text-center'>
          <h2 className='text-center'>HOTEL CASA MAYA HOLBOX</h2>
          <p className='text-justify'>
            Hotel rústico a la orilla del mar con una impresionante playa que te hará sentir en un entorno 100% caribeño. En la mañana podrás relajarte, disfrutar un rico cóctel y nadar en el mar cristalino.
            Por la noche podrás recorrer las peculiares calles y gastronomía de los habitantes quienes te harán sentir como un local.
          </p>
          <MDBBtn style={{backgroundColor: '#004660 !important'}}>Ver más</MDBBtn>
        </div>
      </MDBCol>
    </MDBRow>
    <MDBRow className="no-gutters">
      <MDBCol middle className='align-items-center'>
        <div className='w-75 float-right mr-md-5 text-center'>
          <p style={{fontSize: '30px'}} className='float-right text-center'>
             Regístrate y te enviaremos las mejores ofertas para ti
          </p>
          <input placeholder='E-mail' type="text" id="example1" className="form-control form-control-lg text-center" />
        </div>  
      </MDBCol>
      <MDBCol>
        <Img fluid={bacalar.childImageSharp.fluid} />
      </MDBCol>
    </MDBRow>
    <MDBRow className="no-gutters">
      <MDBCol>
        <iframe src="https://www.google.com/maps/d/embed?mid=1S1U0PHEcD-T41WIKnLXQBS-0j5n_c5-t" width="100%" height="384.54"></iframe>
      </MDBCol>
      <MDBCol middle className='align-items-center'>
        <div className='w-75 ml-md-5 text-center'>
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
  const wayakHotel = data.wayakHotel
  const bekeHotel = data.bekeHotel
  const casaMaya = data.casaMaya
  const bacalar = data.bacalar
  console.log(data)
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        heroImage={heroImage}
        logoWayak={logoWayak}
        descriptionImage={descImage}
        logoBeke={beke}
        wayakHotel={wayakHotel}
        bekeHotel={bekeHotel}
        casaMaya={casaMaya}
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
    casaMaya: file(relativePath: { eq: "casa-maya.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bekeHotel: file(relativePath: { eq: "beke-hotel.jpg" }){
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wayakHotel: file(relativePath: { eq: "wayak-hotel.jpg" }){
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
