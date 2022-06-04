import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer text-center  pt-5' style={{height:'400px'}}>
            <Container className='footer-container'>
            <h5 className='mb-4'>JOIN NOW AND GET 15% OFF</h5>
            
            <div className='footer-input mb-5'>
            <input type="email" name="" id="" placeholder='Your Email Address' />
            <input type="button" value="SUBSCRIBE" />
            </div>
            
            <h2 style={{letterSpacing:'4px', fontWeight:'bolder'}}>TIMEKEPPER</h2>
            <div className='text-center footer-button mt-4'>
                <button className='m-2'>CONTACT</button>
                <button className='m-2'>ABOUT US</button>
                <button className='m-2'>WATCHES</button>
                <button className='m-2'>POLICY</button>
            </div>
            <p className="mt-4 " style={{fontSize:"13px", color:'#898c91'}}>© Copyright 2018 <span className='fw-bold'>TIMEKEPPER</span> All rights reserved.</p>
            </Container>
        </div>
    );
};

export default Footer;