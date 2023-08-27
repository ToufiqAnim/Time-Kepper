import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Components/Shared/Navigation/Navigation';
import '../Pages/Watches/Watches.css';
import Watch from '../Components/Watch/Watch';

const Collections = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch('https://time-kepper-api.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  return (
    <>
      <Navigation />
      <div style={{ backgroundColor: '#f7f7f7', marginTop: 60 }}>
        <p className="text-center pt-5 mb-1">All COLLECTION</p>{' '}
        <hr className=" mx-auto mt-0 " style={{ width: '90px' }} />
        <h1 className="text-center fw-bold">
          <strong style={{ color: '#eec277' }}> FEATURED </strong>{' '}
          <strong>WATCHES</strong>
        </h1>
        <Container className="watches-card pb-5">
          {watches.map((watch) => (
            <Watch key={watch.id} watch={watch}></Watch>
          ))}
        </Container>
      </div>
    </>
  );
};

export default Collections;
