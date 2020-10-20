import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'


const YoutubeSection = () => {
  return (
    <div style={{background: "#707990"}}>
      <Container>
        <Row 
          className="row-cols-1 row-cols-sm-2"
        >
          <Col>
            <ReactPlayer 
              controls="true"
              width="100%"
              url="https://youtu.be/pA0NRgoMUy0"
            />
          </Col>
          <Col>
            <ReactPlayer 
              controls="true"
              width="100%"
              url="https://youtu.be/pA0NRgoMUy0"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default YoutubeSection