import React from 'react';
import { Container } from 'react-bootstrap';

import './Watches.css';
import { useGetWatchesQuery } from '../../features/watches/watchesApi';
import Watch from '../../Components/Watch/Watch';
const Watches = () => {
  const { data, isLoading, isFetching, isError } = useGetWatchesQuery();
  const watches = data;

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Something Went Wrong</p>;
  }
  return (
    <div style={{ backgroundColor: '#f7f7f7' }}>
      <p className="text-center pt-5 mb-1">NEW COLLECTION</p>{' '}
      <hr className=" mx-auto mt-0 " style={{ width: '90px' }} />
      <h1 className="text-center fw-bold">
        <strong style={{ color: '#eec277' }}> FEATURED </strong>
        <strong>WATCHES</strong>
      </h1>
      <Container className="watches-card pb-5">
        {watches.slice(0, 6)?.map((watch) => (
          <Watch key={watch._id} watch={watch}></Watch>
        ))}
      </Container>
    </div>
  );
};

export default Watches;
