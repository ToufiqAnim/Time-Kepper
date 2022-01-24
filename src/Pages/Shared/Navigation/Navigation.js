import React, {useState} from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './Navigation.css';


const Navigation = ({toggle}) => {
  
const [navbar, setNavbar] = useState(false);
 const [navBg, setNavBg] = useState('transparent');

 const location = useLocation();

useEffect(() => {
  if (window.location.pathname === "/home") {
    setNavBg('rgba(0,0,0,.9)');
  } else {
    setNavBg('black')
  }
}, [location]);
const {user, logOut} = useFirebase();

// CHANGE NAVBAR COLOR ON SCROLLING--------------\\

/*  const changeBackground = () =>{
  if(window.scrollY >= 100) {
    setNavbar(true)
  }
  else{
    setNavbar(false)
  }
} 

window.addEventListener('scroll' , changeBackground ) */
  return (
    <Navbar  fixed="top"  expand="lg"  className={navbar ? 'navbar active p-3' : 'navbar p-3'} style={{ backgroundColor: navBg }}>
  <Container>
    <Navbar.Brand href="/home" className="fs-2 fw-bold " style={{color:'wheat'}} >TimeKeeper</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:'wheat'}} />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav className="me-auto fw-bold" >
        <Nav.Link as = {Link} to="/home" className="fs-6 navLink" style={{color:'wheat'}}>Home</Nav.Link>

        <Nav.Link as = {Link} to="/link" className="fs-6 navLink"   style={{color:'wheat'}}>Explore</Nav.Link>

        <Nav.Link as = {Link} to="/dashbord" className="fs-6 navLink"  style={{color:'wheat'}}>Dashboard</Nav.Link>

        {user.email?
        <Nav.Link as = {Link} onClick={logOut} to="/login" className="fs-6 navLink"  style={{color:'wheat'}}>Logout</Nav.Link>
        
       :
       <Nav.Link as = {Link} to="/login" className="fs-6 navLink"  style={{color:'wheat'}}>Login</Nav.Link>
        }
       <span className="pt-2" style={{color:'wheat', position:'relative', left:'100%'}}>User Name: {user.displayName}</span>
 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default Navigation;