import React from 'react'
import { Col, Container, Image} from 'react-bootstrap'
import RoundProfile from '../assets/profile_square_small.jpg'
import GithubLink from '../icons/GithubLink'
import LinkedInLink from '../icons/LinkedInLink'
import MediumLink from '../icons/MediumLink'
import ResumeLink from '../icons/ResumeLink'
import TwitterLink from '../icons/TwitterLink'

// const jStyle = {
//   color: "#444763",
//   background: "#D2D8DF",
//   margin: "5%" 
// }

const Home = () => {
  return (
    // <header className="masthead text-white" style={{background: "#4B4E6D"}}>
    <div style={{background: "#4B4E6D"}}>
      <Container 
        className="p-4"
      >
        <div 
          className="row align-items-center text-white " 
        >
          <Col 
            className="justify-content-sm-left"
          >
            <Image 
              className="p-4 p-sm-3 mx-auto"
              src={ RoundProfile } 
              roundedCircle 
              style={{maxHeight: "300px"}}
            />
          </Col>
          
          <Col 
            sm="8"
            className="text-center text-sm-left justify-content-center"
          >
              <h3>Hey, I'm Berel</h3>
              <p>I'm a fullstack developer looking for a challenge.</p>
              <p>
                Reach out! <a style={{color: "#C3CBD4"}} href="mailto:berel@berellevy.com">berel@berellevy.com</a>
              </p>
              <div >
                <LinkedInLink /> | <TwitterLink/> | <GithubLink /> | <MediumLink /> | <ResumeLink />
              </div>
          </Col>
        </div>
      </Container>
      </div>

  )
}


export default Home