import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import Nav from 'react-bootstrap/Nav'
import { Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar className="bg-lg" >
        <Container 
          className="flex-column flex-sm-row my-2 my-sm-3"
        >
          <NavbarBrand
            className="mr-0"
          >berellevy.com</NavbarBrand>
          <Nav 
            className="ml-sm-auto"
          >
            <Nav.Link className="text-secondary mx-1" href="/home" disabled >Home</Nav.Link>
            {/* <Nav.Link className="text-secondary mx-1"href="/about" disabled >About</Nav.Link>
            <Nav.Link className="text-secondary mx-1"href="/contact"disabled >Contact</Nav.Link> */}
          </Nav>
        </Container>
    </Navbar>
  )
}


export default NavBar