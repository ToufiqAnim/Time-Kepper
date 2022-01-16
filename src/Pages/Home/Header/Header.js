import React from 'react';
import {  Col, Container, Row } from 'react-bootstrap';
import watch from '../../../images/watch.jpg'


import './Header.css'
const Header = () => {
    return (
        <div className='bg-img header' style={{watch}}>
           
           <Container>
               <Row>
                   <Col xs={12} lg={4} className='banner-text ' style={{color:'wheat'}}>
                    <p className=' fs-4 my-1'>Empire Collection</p>
                   <h1>The Watch Everyone Desire!</h1>
                   <p className='my-4' >The new Bulova collection is already here! This quartz Bulova Franklin model, designed with elegance, is truly a cherry on the cake.</p>
                   <button className=' button px-4 py-2 '>Buy Now</button>
                   </Col>
               </Row>
           </Container>
         
           
        </div>
    );
};

export default Header;