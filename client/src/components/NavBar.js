import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import {NavLink } from "react-router-dom"
import { NavDropdown } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import { DropdownButton } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'
import { ButtonGroup } from 'react-bootstrap'


export class NavBar extends Component {
  render() {
    return (
      <div>
       <Navbar className="nav_bar" expand="lg">
       {/* <img src="https://img.icons8.com/color/36/E67E22/twitter.png" />
       <img src="https://img.icons8.com/color/36/000000/facebook-new.png" /> */}
                               
       <a href ="tel: +234 9056745769"><img className="contact_icon" src="https://img.icons8.com/ultraviolet/36/000000/phone.png" /></a>
  <Navbar.Brand style={{marginLeft: '40%'}}  href="#home">
  {/* <Image width="100" src="https://www.codester.com/static/uploads/items/8870/icon.png"/> */}
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav style={{color: 'red'}} className="mr-auto">
    <NavLink className="nav_item" to="/">Home</NavLink>
      <NavLink className="nav_item" to="/about">Docs</NavLink>
      <NavLink className="nav_item" to="/form">Latest News</NavLink>
      <NavLink className="nav_item" to="/contact">Contact Us</NavLink>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">student</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">admin</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
        {/* <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */} 
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form> */}
      </Navbar.Collapse>
          <DropdownButton className="login_btn" id="dropdown-item-button" title="Log in">
              <Dropdown.Item> <NavLink className="nav_item" to="/form">Student</NavLink></Dropdown.Item>
              <Dropdown.Item> <NavLink className="nav_item" to="/forms">Admin</NavLink></Dropdown.Item>              
              {/* <Dropdown.Item as="button">Something else</Dropdown.Item> */}
          </DropdownButton>
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
