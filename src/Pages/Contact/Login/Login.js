import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import './login.css';
import useFirebase from '../../../Hooks/useFirebase';
import { FcGoogle } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';
import Navigation from '../../../Components/Shared/Navigation/Navigation';

const Login = () => {
  const {
    googleSignIn,
    handleRegistration,
    handlePasswordChange,
    handleEmailChange,
  } = useFirebase();
  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location.state?.from || '/home';

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <Navigation />
      <Container className="form-container  ">
        <Form
          className="login-form px-3 pt-5 pb-1 border "
          onSubmit={handleRegistration}
        >
          <Form.Group className="mb-3 email" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="p-2"
              style={{ borderRadius: '0px' }}
            />
          </Form.Group>
          <Form.Group className="mb-3 password" controlId="formBasicPassword">
            <Form.Label style={{ marginRight: '10px' }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password "
              style={{ borderRadius: '0px', width: 450, marginLeft: 5 }}
              className="p-2"
            />
          </Form.Group>

          <p className="text-center formText">Forgot your password?</p>
          <div className="btnBox">
            <button type="submit" className="login-button py-2 px-3 ">
              {' '}
              Sign In
            </button>
          </div>

          <Link
            to="/register"
            className="text-decoration-none text-black d-flex justify-content-center "
          >
            <p className="formText mt-4">No account? Create one here</p>
          </Link>
          <div className="loginAccess">
            <div className="loginAccess-line"></div>
            <span className="loginAccess-text">Or use one of this option</span>
            <div className="loginAccess-line"></div>
          </div>
        </Form>

        <div className="text-center pb-4">
          <button className=" iconBtn bg-white" onClick={handleGoogleSignIn}>
            <FcGoogle
              className="  p-3 "
              style={{ fontSize: '5rem' }}
            ></FcGoogle>{' '}
          </button>
        </div>
      </Container>
    </div>
  );
};
export default Login;
