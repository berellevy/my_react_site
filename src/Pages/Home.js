import React from 'react'
import { Row, Col, Container, Image, Card, CardBody, CardTitle, CardLink, CardText} from 'react-bootstrap'
import RoundProfile from '../assets/profile_square_small.jpg'
import GithubLink from '../icons/GithubLink'
import LinkedInLink from '../icons/LinkedInLink'
import MediumLink from '../icons/MediumLink'
import ResumeLink from '../icons/ResumeLink'
import TwitterLink from '../icons/TwitterLink'
import { ArticleLink } from '../Components/ArticleLink'


const Home = () => {
  return (
    <>
      <div className='first-banner' style={{background: "#4B4E6D"}}>
        <Container className="p-4">
          <Row className="align-items-center text-white " >
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
                <p>Reach out <a style={{color: "#C3CBD4"}} href="mailto:berellevy@gmail.com">berel@berellevy.com</a></p>
                <div className='fs-4'><LinkedInLink /> | <TwitterLink/> | <GithubLink /> | <MediumLink /> | <ResumeLink /></div>
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
            <Col sm={6}>
              <ArticleLink 
                title="Pause/Play YouTube with Your Keyboard!"
                text="Let's make a keyboard shortcut that you can click in any active window that will pause your YouTube tutorial."
                href="https://medium.com/@berellevy/pause-play-youtube-with-your-keyboard-b747029f9f4a"
              />
            </Col>
            <Col sm={6}>
              <ArticleLink 
                title="Closure in JavaScript"
                text="what is closure? There's a short answer and a long answer."
                href="https://medium.com/@berellevy/closure-in-javascript-d04fe11d81c3"
              />
            </Col>
            <Col sm={6}>
              <ArticleLink 
                title="Introducing FauxMeaux 2.0 (patent pending)"
                text="A new concept in social media advertising that will benefit all parties involved."
                href="https://medium.com/@berellevy/introducing-fauxmeaux-2-0-patent-pending-6b1a14584ab3"
              />
            </Col>
          </Row>
        </Container>
      </div>
      
    </>

  )
}


export default Home
