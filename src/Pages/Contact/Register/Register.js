import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import Navigation from '../../../Components/Shared/Navigation/Navigation';

const Register = () => {
  const {
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
  } = useFirebase();
  return (
    <div>
      <Navigation></Navigation>
      <Container className="form-container " /* style={{width:'50%'}} */>
        <Form
          className="login-form border px-3 py-5"
          onSubmit={handleRegistration}
        >
          <Form.Group className="mb-3 email">
            <Form.Label className="my-auto">Name</Form.Label>
            <Form.Control
              type="text"
              onBlur={handleNameChange}
              placeholder="Enter Your Name"
              className="p-2"
              style={{ borderRadius: '0px', width: '450px' }}
            />
          </Form.Group>
          <Form.Group className="mb-3 email" controlId="formBasicEmail">
            <Form.Label className="my-auto">Email</Form.Label>
            <Form.Control
              type="email"
              onBlur={handleEmailChange}
              placeholder="Enter email"
              className="p-2"
              style={{ borderRadius: '0px' }}
            />
          </Form.Group>
          <Form.Group className="mb-3 password" controlId="formBasicPassword">
            <Form.Label className="my-auto" style={{ marginRight: '10px' }}>
              Password
            </Form.Label>
            <Form.Control
              type="password"
              onBlur={handlePasswordChange}
              placeholder="Password "
              style={{ borderRadius: '0px', width: 450, marginLeft: 5 }}
              className="p-2"
            />
          </Form.Group>
          {/*  <Form.Group className="mb-3 password" controlId="formBasicPassword">
                     <Form.Label className='my-auto' style={{marginRight:"10px"}}>Password</Form.Label>
                     <Form.Control type="password" placeholder="Re-Enter Your Password "   style={{borderRadius:'0px', width:450, marginLeft:5}}  className='p-2'/>
                     
                 </Form.Group> */}

          <div className="btnBox">
            <button type="submit" className="login-button py-2 px-3 ">
              {' '}
              Register
            </button>
          </div>
          <hr />
          <Link
            to="/login"
            className="text-decoration-none text-black d-flex justify-content-center "
          >
            <p className="formText">Already Have An Account!</p>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
