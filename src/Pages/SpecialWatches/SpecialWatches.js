import React from 'react';
import { Card, Carousel} from 'react-bootstrap';


import './SpecialWatches.css';
const SpecialWatches = () => {
   
    return (
        <div className="specialWatch">
            <p className='text-center  mt-5 mb-1'>Best Choices</p><hr className=' mx-auto mt-0 ' style={{width:'100px'}}/>
            <h1 className='text-center fw-bold'><strong className='' style={{color:'#eec277'}}>SPECIAL </strong><strong>EDITION</strong></h1>
            <div >
            <Carousel variant="dark mt-5 mb-5" style={{height:'475px'}} >
                 <Carousel.Item className='carousel-item'>
                
                   
                    <Card className="special-card border-0" style={{ width: "100%"}}>
                      
                        <Card.Img  className="cardImg" variant="top" src="https://cdn.shopify.com/s/files/1/2784/4648/products/FusionGreen-Packshot_1140x1140.png?v=1626268166" />
                       
                       
                       <Card.Body className="cardBody">
                            <Card.Title className='title'>THE FUSION</Card.Title>
                            <Card.Text className='mb-1' style={{color:'gray'}}>
                                GREEN
                            </Card.Text>
                            <Card.Text className='mb-1' style={{color:'gray'}}>
                                $399
                            </Card.Text>
                            <Card.Text className="watchDetails">
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
                            <Card.Title className='title'>THE MOMENTUM CHRONO</Card.Title>
                            <Card.Text className='mb-1' style={{color:'gray'}}>
                            ROSE GOLD
                            </Card.Text>
                            <Card.Text className='mb-1' style={{color:'gray'}}>
                                $559
                            </Card.Text>
                            <Card.Text className="watchDetails">
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
                            <Card.Title className='title'>MILAN GREEN</Card.Title>
                            <Card.Text className='mb-1' style={{color:'gray'}}>
                                $650
                            </Card.Text>
                            <Card.Text className="watchDetails">
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
                            <Card.Title className='title'>PRAGUE SKELETON</Card.Title>
                            <Card.Text className='mb-1' style={{color:'gray'}}>
                               BLACK
                            </Card.Text>
                            <Card.Text className='mb-1' style={{color:'gray'}}>
                                $275
                            </Card.Text>
                            <Card.Text className="watchDetails">
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