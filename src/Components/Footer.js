import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/footer.css'


const Footer = () => {
  return (
    <footer 
      className="footer bg-lg p-4 d-flex align-items-center"
    >
      <Container>
        <p className="mb-0" >copywrong 2020 Berel Levy</p>
        <a href="mailto:berel@berellevy.com">berel@berellevy.com</a>
      </Container>
    </footer>
  )
}


export default Footer