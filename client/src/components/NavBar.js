import React, { Component } from 'react'
import styled from 'styled-components'
import { Nav } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'

export class NavBar extends Component {
  render() {
    return (
      <div>
       <Navbar bg="dark" expand="lg">
       <h1 style={{marginButtom: '200px'}}>logo</h1>
  <Navbar.Brand style={{marginLeft: '40%'}}  href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form> */}
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}

// const NavWrapper = styled.nav`
// background: red;
// height: 300px;
// .nav-link{color:var(--mainBlack)!important;font-size:1.3rem;text-transform: capitalize}
// `;

export default NavBar
