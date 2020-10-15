import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import RoundProfile from '../assets/profile_square_small.jpg'
import GithubLink from '../icons/GithubLink'
import LinkedInLink from '../icons/LinkedInLink'
import MediumLink from '../icons/MediumLink'
import ResumeLink from '../icons/ResumeLink'
import TwitterLink from '../icons/TwitterLink'

const jStyle = {
  color: "#444763",
  background: "#D2D8DF",
  margin: "5%" 
}

const Home = () => {
  return (
    <header className="masthead text-white" style={{background: "#4B4E6D"}}>
      <Container>
        <Row className="align-items-center">
          <Col sm="4">
            <Image src={ RoundProfile } roundedCircle fluid style={{padding: "5%", maxHeight: 300}}/>
          </Col>
          <Col >
              <h3>Hey, I'm Berel</h3>
              <p>I'm a fullstack developer looking for a challenge.</p>
              <p>
                Reach out! <a style={{color: "#C3CBD4"}} href="mailto:berel@berellevy.com">berel@berellevy.com</a>
              </p>
              <div >
                <TwitterLink/> | <LinkedInLink /> | <GithubLink /> | <MediumLink /> | <ResumeLink />
              </div>
          </Col>

        </Row>

      </Container>
    </header>

  )
}


export default Home