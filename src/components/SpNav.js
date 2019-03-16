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
          <Link to="/" className="navbar-brand">
            <img
              alt="logo"
              src={logo}
              width="250"
              className="pl-5"

            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="Menu mt-2 mr-5">
              {/* <a href="#deets">Quiz</a>
            <a href="#deets">Verify</a>
            <a href="#deets">About</a> */}
              <NavItem><Link to="/quiz" className="nav-link">Quiz</Link></NavItem>
              <NavItem><Link to="/verify" className="nav-link">Verify</Link></NavItem>
              <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default SpNav