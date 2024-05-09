import React from 'react'
import { Row, Col, Container, Image} from 'react-bootstrap'
import RoundProfile from '../assets/profile_square_small.jpg'
import GithubLink from '../icons/GithubLink'
import LinkedInLink from '../icons/LinkedInLink'
import MediumLink from '../icons/MediumLink'
import ResumeLink from '../icons/ResumeLink'
import TwitterLink from '../icons/TwitterLink'
import { ArticleLink } from '../Components/ArticleLink'
import mediumArticles from '../mediumArticles'


const Home = () => {
  return (
    <>
      <div className='first-banner' style={{background: "#4B4E6D"}}>
        <Container className="p-4">
        <Row className="align-items-center text-light" >
            <Col className="justify-content-left">
              <Image 
                className="p-4 p-sm-3 mx-auto"
                src={ RoundProfile } 
                roundedCircle 
                style={{maxHeight: "300px"}}
              />
            </Col>
            <Col sm="8"className=" text-sm-left justify-content-center">
                <h3>Hey, I'm Berel</h3>
                <p>I'm a fullstack developer looking for a challenge.</p>
                <p>Reach out <a style={{color: "#C3CBD4"}} href="mailto:berellevy@gmail.com">berellevy@gmail.com</a></p>
                <div className='fs-2'>
                <ResumeLink /> | <LinkedInLink /> | <TwitterLink/> | <GithubLink /> | <MediumLink /> 
                </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{background: "#e6dbd4"}}>
        <Container className='p-4'>
          <Row>
            <Col >
              <h4 className='fs-1 mb-3'> Articles</h4>
            </Col>
          </Row>
          <Row className='section2 p-2 g-4' style={{background: "#e6dbd4"}}>
            {
              mediumArticles.map((data, i) => (
                <Col sm={6} key={i}>
                  <ArticleLink {...data}/>
                </Col>    
              ))
            }
          </Row>
        </Container>
      </div>
    </>

  )
}


export default Home
