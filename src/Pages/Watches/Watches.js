import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import Watch from '../Watch/Watch';
import './Watches.css'
const Watches = () => {
    const [watches, setWatches] = useState([]);
    useEffect(()=> {
        fetch('./watches.json')
        .then(res => res.json())
        .then(data => setWatches(data.slice(0,6)))
    },[])
    return (
        <div>
           
            <h1 className="text-center">New Bulova Watch Collection</h1>
            <Container className="watches-card">
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