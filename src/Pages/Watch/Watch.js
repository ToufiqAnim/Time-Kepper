import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './watch.css';
const Watch = ({watch}) => {
    const {name, image, price} = watch;
    return (
        <Container>
            
           <Card className='my-3' style={{border:'none', width:'100%', height:"550px", borderRadius:'15px'}}>
            <div className='img-box'>
            <Card.Img variant="top" className=' image '  src={image} />
            <div className='img-overlay'></div>
            </div>
            <Card.Body className='text-center pt-2' >
                <p className='fs-6'>{name}</p>
                <Card.Text  >
                    ${price}
                </Card.Text>
                <button style={{ backgroundColor:'transparent', color:'#eec277', border:"2px solid"}}  className='px-4 py-2 fw-bold '>Buy Now</button>
            </Card.Body>
            </Card>
       
        </Container>
    );
};

export default Watch;