import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/footer.css'


export const Footer = () => {
  return (
    <footer 
      className="footer bg-lg p-4 d-flex align-items-center"
    >
      <Container>
        <a href="mailto:berellevy@gmail.com">berellevy@gmail.com</a>
      </Container>
    </footer>
  )
}
