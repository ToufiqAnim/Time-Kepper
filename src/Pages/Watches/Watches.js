import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import Watch from '../Watch/Watch';
import './Watches.css'
const Watches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(()=> {
        fetch('./watches.json')
        .then(res => res.json())
        .then(data => setWatches(data.watches.slice(0,6)))
    },[])
    return (
        <div>
           
           <p className='text-center mt-5 mb-1' >NEW COLLECTION</p> <hr className=' mx-auto mt-0 ' style={{width:'90px'}}/>
            <h1 className="text-center fw-bold"><strong style={{color:'#eec277'}}> FEATURED </strong> <strong>WATCHES</strong></h1>
            <Container className="watches-card" >
                {
                   watches.map(watch => <Watch
                   key={watch.key}
                   watch={watch}></Watch>)
                }
            </Container>
        </div>
    );
};

export default Watches;