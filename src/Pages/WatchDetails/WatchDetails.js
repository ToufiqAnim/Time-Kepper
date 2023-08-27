import React from 'react';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useGetWatchesByIdQuery } from '../../features/watches/watchesApi';
import { addToCart } from '../../features/cart/cartSlice';
import Navigation from '../../Components/Shared/Navigation/Navigation';

const WatchDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetWatchesByIdQuery(
    id /* , {
    pollingInterval: 500,
  } */
  );
  const dispatch = useDispatch();
  return (
    <>
      <Navigation />
      <Container style={{ marginTop: '10%', marginBottom: 50 }}>
        <Card className=" border-0 vh-90 ">
          <Row className="d-flex align-items-center justify-content-center">
            <Col xs={12} sm={12} md={6} lg={6}>
              <Card.Img src={data?.img} />
            </Col>
            <Col sx={12} sm={12} md={6} lg={6}>
              <Card.Body>
                <Card.Title className="display-6">{data?.title}</Card.Title>
                <Card.Text>{data?.desc}</Card.Text>
                <Card.Text className="display-6">${data?.price}</Card.Text>
                <div className="addContainer w-50 d-flex align-items-center justify-content-between">
                  <button
                    onClick={() => dispatch(addToCart(data))}
                    style={{
                      backgroundColor: 'transparent',
                      color: '#eec277',
                      border: '2px solid',
                      borderRadius: 0,
                      fontWeight: 400,
                    }}
                    className="px-4 py-2 fw-bold "
                  >
                    ADD TO CART
                  </button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default WatchDetails;
