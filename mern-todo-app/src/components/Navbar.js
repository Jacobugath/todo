import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import jm from '../assests/images/favicon.png'
import '../assests/css/nav.css'
export const NavComp = () =>(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/"><img  src={jm} alt="JM"/> Todo App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Todo List</Nav.Link>
      <Nav.Link href="/create">Create Todo</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
