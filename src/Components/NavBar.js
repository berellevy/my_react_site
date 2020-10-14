import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar expand="xl" bg="light">
        <Container>
          <NavbarBrand>berellevy.com</NavbarBrand>
          <Nav className="ml-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Container>
    </Navbar>
  )
}


export default NavBar