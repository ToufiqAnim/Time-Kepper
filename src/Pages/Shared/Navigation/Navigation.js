import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
  return (
    <Navbar fixed='top'  expand="lg" className='navbar-dark p-3'>
  <Container>
    <Navbar.Brand href="/home" className="fs-2 d-flex align-items-center justify-content-center" style={{color:'wheat'}} >TimeKeeper</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto " >
        <Nav.Link as = {Link} to="/home" className="fs-6 navLink" style={{color:'wheat'}}>Home</Nav.Link>
        <Nav.Link as = {Link} to="/link" className="fs-6 navLink"   style={{color:'wheat'}}>Explore</Nav.Link>
        <Nav.Link as = {Link} to="/dashbord" className="fs-6 navLink"  style={{color:'wheat'}}>Dashboard</Nav.Link>
        <Nav.Link as = {Link} to="/login" className="fs-6 navLink"  style={{color:'wheat'}}>Login</Nav.Link>
        <Nav.Link as = {Link} to="/logout" className="fs-6 navLink"  style={{color:'wheat'}}>Logout</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navigation;