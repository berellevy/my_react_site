import React from 'react'
import { Container, Image } from 'react-bootstrap'
import RoundProfile from '../assets/round-profile.png'



const Home = () => {
  return (
    <header className="masthead bg-success text-white">
      <Container>
        <Image src={ RoundProfile } display="inline"/>
        
      </Container>
    </header>

  )
}


export default Home