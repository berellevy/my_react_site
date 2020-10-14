import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


const NavBar = () => {
  return (
    <Navbar bg="light">
        <Navbar.Brand>berellevy.com</Navbar.Brand>
        <Nav.Link href="#home">Home</Nav.Link>
    </Navbar>
  )
}


export default NavBar