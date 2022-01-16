import React, {useState} from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
const [navbar, setNavbar] = useState(false);

const changeBackground = () =>{
  if(window.scrollY >= 100) {
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }
}

window.addEventListener('scroll', changeBackground)
  return (
    <Navbar  fixed="top"  expand="lg"  className={navbar ? 'navbar active p-3' : 'navbar p-3'}>
  <Container>
    <Navbar.Brand href="/home" className="fs-2 fw-bold " style={{color:'wheat'}} >TimeKeeper</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:'wheat'}} />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto fw-bold" >
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