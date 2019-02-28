import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';

class SpNav extends Component {
    render() {
        return (
            <Navbar className="shadow" collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/" >
            <img
              alt="logo"
              src={logo}
              width="250"
              class="pl-5"

            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="Menu mt-2">
              {/* <a href="#deets">Quiz</a>
            <a href="#deets">Verify</a>
            <a href="#deets">About</a> */}
              <NavItem><Link to="/quiz" class="nav-link">Quiz</Link></NavItem>
              <NavItem><Link to="/verify" class="nav-link">Verify</Link></NavItem>
              <NavItem className="mr-5"><Link to="/about" class="nav-link">About</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default SpNav