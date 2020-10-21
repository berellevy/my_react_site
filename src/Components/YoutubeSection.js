import React from 'react'
import { Container, Row } from 'react-bootstrap'


const YoutubeSection = () => {
  return (
    <div style={{background: "#707990"}}>
      <Container>
        <h1 className="text-center">Check out some of my youtube clips!</h1>
        <Row 
          className="row-cols-1 row-cols-sm-2 p-4"
        >
          <div className="col p-3">
            <div className="card">
              <div className="embed-responsive embed-responsive-16by9 p-5">
                <iframe
                  className="p-1"
                  title="unique" 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/pA0NRgoMUy0" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
                ></iframe>
              </div> 
              <div class="card-body">
              <h5 class="card-title">FauxMeaux Short Demo</h5>
                <p class="card-text">
                  It's a unique take on ads, counterintuitive but compelling.
                </p>
              </div>
            </div>
          </div>
          <div className="col p-3">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                title="unique" 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/pA0NRgoMUy0" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}


export default YoutubeSection