import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './Discount.css';
const Discount = () => {
    
    return (
        <div style={{backgroundColor:'#f7f7f7'}}>
       <Container className='discount pt-5 pb-5' >
           <Card className='my-3 discount-card'>

            <div className='discount-imgBox'>
            <Card.Img variant="top" className=' discount-img img-fluid'  src="https://i.ibb.co/3758CrW/Maverick-Camo-Blue-Pack-Shot-1140x1140-2.png"/>
            <div ></div>
            </div>
            <Card.Body className='pt-2' >
                
                <Card.Text className="h4" style={{fontWeight:'300'}} >
                30% Discount

                </Card.Text>
                <Card.Text  className='h3 mb-5'>
                New Smartwatch
                </Card.Text>
                <button style={{ backgroundColor:'transparent', color:'#eec277', border:"2px solid"}}  className='px-4 py-2 fw-bold '>Buy Now</button>
            </Card.Body>
            </Card>

           <Card className='my-3 discount-card' >
            <div className='discount-imgBox'>
            <Card.Img variant="top" className=' discount-img '  src="https://i.ibb.co/FgwrbYW/Prague-Deluxe-Rose-Gold-Packshot-1140x1140.png"/>
            <div></div>
            </div>
            <Card.Body className=' pt-2' >
                
                <Card.Text  className='h4' style={{fontWeight:'300'}}>
                20% Discount
                </Card.Text>
                <Card.Text  className='h3 mb-5'>
                Best Sport Watch
                </Card.Text>
                <button style={{ backgroundColor:'transparent', color:'#eec277', border:"2px solid"}}  className='px-4 py-2 fw-bold '>Buy Now</button>
            </Card.Body>
            </Card>
       </Container>
       </div>
    );
};

export default Discount;