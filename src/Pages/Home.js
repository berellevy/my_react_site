import React from 'react'
import {
  Row,
  Col,
  Container,
  Image,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'react-bootstrap'
import RoundProfile from '../assets/profile_square_small.jpg'
import GithubLink from '../icons/GithubLink'
import LinkedInLink from '../icons/LinkedInLink'
import MediumLink from '../icons/MediumLink'
import ResumeLink from '../icons/ResumeLink'
import TwitterLink from '../icons/TwitterLink'
import { ArticleLink } from '../components/ArticleLink'
import mediumArticles from '../mediumArticles'
import JobAppFillerLogo from '../assets/job_app_filler_logo440.png'


export const Home = () => {
  return (
    <>
      <div className="first-banner" style={{ background: '#4B4E6D' }}>
        <Container className="p-4">
          <Row className="align-items-center text-light">
            <Col className="justify-content-left">
              <Image
                className="p-4 p-sm-3 mx-auto"
                src={RoundProfile}
                roundedCircle
                style={{ maxHeight: '300px' }}
              />
            </Col>
            <Col sm="8" className=" text-sm-left justify-content-center">
              <h3>Hey, I'm Berel</h3>
              <p>I'm a fullstack developer looking for a challenge.</p>
              <p>
                Reach out{' '}
                <a
                  style={{ color: '#C3CBD4' }}
                  href="mailto:berellevy@gmail.com"
                >
                  berellevy@gmail.com
                </a>
              </p>
              <div className="fs-2">
                <ResumeLink /> | <LinkedInLink /> | <TwitterLink /> |{' '}
                <GithubLink /> | <MediumLink />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ background: '#e6dbd4' }}>
        <Container className="p-4">
          <Row>
            <Col>
              <h4 className="fs-1 mb-3"> Projects</h4>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Card style={{ background: 'light' }}>
                <CardBody>
                  <Row xs="auto" className=" mb-4 g-3 align-items-center">
                    <Col>
                      <Image src={JobAppFillerLogo} style={{ height: '4em' }} />
                    </Col>
                    <Col>
                      <CardTitle className="">Job App Filler</CardTitle>
                      <Card.Subtitle>A Chrome Extension</Card.Subtitle>
                    </Col>
                  </Row>
                  <CardText>
                    Hate Workday? There's autofill for that.
                    <br />
                    <span className="me-3">Completely free.</span>
                    <span class="me-3">Requires no login.</span>
                    <span class="me-3">
                      Doesn't send your data <em>anywhere</em>.
                    </span>
                    <br />
                    Oh, and it's open source, too.
                  </CardText>
                  <Card.Link
                    target="_blank"
                    href="https://chromewebstore.google.com/detail/job-app-filler/gdballabidaicjchgomokfmalodbkeoc"
                  >
                    Get Extension
                  </Card.Link>
                  <Card.Link
                    target="_blank"
                    className="secondary"
                    href="https://github.com/berellevy/job_app_filler"
                  >
                    Contribute
                  </Card.Link>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4 className="fs-1 mb-3"> Articles</h4>
            </Col>
          </Row>
          <Row className="section2 g-4" style={{ background: '#e6dbd4' }}>
            {mediumArticles.map((data, i) => (
              <Col sm={7} md={4} lg={3} key={i}>
                <ArticleLink {...data} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}


