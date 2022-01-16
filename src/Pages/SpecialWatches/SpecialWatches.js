import React from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';


import './SpecialWatches.css';
const SpecialWatches = () => {
   
    return (
        <div>
            <p className='text-center  mt-5 mb-1'>Best Choices</p><hr className=' mx-auto mt-0 ' style={{width:'100px'}}/>
            <h1 className='text-center fw-bold'><strong className='' style={{color:'#eec277'}}>SPECIAL </strong><strong>EDITION</strong></h1>
            <div className='specialWatch'>
            <Carousel variant="dark" >
                 <Carousel.Item className='carousel-item'>
                
                   
                    <Card className="special-card border-0" style={{ width: "100%"}}>
                      
                        <Card.Img  className="cardImg" variant="top" src="https://cdn.shopify.com/s/files/1/2784/4648/products/FusionGreen-Packshot_1140x1140.png?v=1626268166" />
                       
                       
                       <Card.Body className="cardBody">
                            <Card.Title>THE FUSION</Card.Title>
                            <Card.Text className='mb-1'>
                                GREEN
                            </Card.Text>
                            <Card.Text className='mb-1'>
                                $399
                            </Card.Text>
                            <Card.Text >
                            Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <button className='special-btn py-2 px-3'>BUY NOW</button>
                            <button className='special-btn py-2 px-4'>ADD TO CART</button>
                        </Card.Body>
                       
                    </Card>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                
                  
                      <Card className="special-card border-0" style={{ width: '100%' }}>
                        <Card.Img className="cardImg" variant="top" src="https://cdn.shopify.com/s/files/1/2784/4648/products/TheMomentumRoseGoldWatchPackshot_1140x1140.png?v=1631550546" />

                        <Card.Body className="cardBody">
                            <Card.Title>THE MOMENTUM CHRONO</Card.Title>
                            <Card.Text className='mb-1'>
                            ROSE GOLD
                            </Card.Text>
                            <Card.Text className='mb-1'>
                                $559
                            </Card.Text>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <button className='special-btn py-2 px-3'>BUY NOW</button>
                            <button className='special-btn py-2 px-4'>ADD TO CART</button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                
                      <Card className="special-card border-0" style={{ width: '100%' }}>

                        <Card.Img className="cardImg" variant="top" src="https://cdn.shopify.com/s/files/1/2784/4648/products/MilanGreenPackshot_1140x1140.png?v=1608221003" />

                        <Card.Body className="cardBody">
                            <Card.Title>MILAN GREEN</Card.Title>
                            <Card.Text className='mb-1'>
                                $650
                            </Card.Text>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <button className='special-btn py-2 px-3'>BUY NOW</button>
                            <button className='special-btn py-2 px-4'>ADD TO CART</button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                
                      <Card className="special-card border-0" style={{ width: '100%' }}>
                        <Card.Img className="cardImg" variant="top"   src="https://cdn.shopify.com/s/files/1/2784/4648/products/PragueDeluxeBlack-Packshot_1140x1140.png?v=1624385176" />

                        <Card.Body className="cardBody">
                            <Card.Title>PRAGUE SKELETON</Card.Title>
                            <Card.Text className='mb-1'>
                               BLACK
                            </Card.Text>
                            <Card.Text className='mb-1'>
                                $275
                            </Card.Text>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <button className='special-btn py-2 px-3'>BUY NOW</button>
                            <button className='special-btn py-2 px-4'>ADD TO CART</button>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default SpecialWatches;