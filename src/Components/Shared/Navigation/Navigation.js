import React, { useState } from 'react';
import { useEffect } from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './Navigation.css';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navigation = ({ toggle }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [navbar, setNavbar] = useState(false);
  const [navBg, setNavBg] = useState('transparent');

  const location = useLocation();

  useEffect(() => {
    if (window.location.pathname === '/home') {
      setNavBg('rgba(0,0,0,.9)');
    } else {
      setNavBg('black');
    }
  }, [location]);
  const { user, logOut } = useFirebase();

  return (
    <Navbar
      fixed="top"
      className={navbar ? 'navbar active p-2' : 'navbar p-2'}
      style={{ backgroundColor: navBg }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fs-2 fw-bold "
          style={{ color: 'wheat', letterSpacing: '4px' }}
        >
          TIMEKEEPER
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ background: 'wheat' }}
        />
        <Navbar.Collapse id="basic-navbar-nav d-flex align-items-center justify-content-center">
          <Nav className=" me-auto fw-bold">
            <Nav.Link
              as={Link}
              to="/collections"
              className="fs-6 navLink"
              style={{ color: 'wheat' }}
            >
              Collections
            </Nav.Link>
          </Nav>
          <Nav
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Nav.Link
              className="d-flex  align-items-center justify-content-center"
              style={{
                color: 'wheat',
              }}
            >
              <FaRegUserCircle /> {user.displayName}
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <div style={{ display: 'flex' }}>
                <FaShoppingCart style={{ color: 'wheat' }} className="fs-3" />
                <p
                  bg="transparent"
                  style={{
                    color: 'wheat',
                  }}
                >
                  {cartItems?.length}
                </p>
              </div>
            </Nav.Link>
            {user.email ? (
              <>
                <Nav.Link
                  as={Link}
                  to="/dashbord"
                  className="fs-6 navLink"
                  style={{ color: 'wheat' }}
                >
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  onClick={logOut}
                  to="/login"
                  className="fs-6 navLink"
                  style={{ color: 'wheat' }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link
                as={Link}
                to="/login"
                className="fs-6 navLink "
                style={{ color: 'wheat' }}
              >
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
