import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./watch.css";
import { useDispatch } from "react-redux";
const Watch = ({ watch }) => {
  const { _id, title, img, desc, price, size } = watch;
  const dispatch = useDispatch();

  return (
    <Container>
      <Card
        className="my-2 watch-card p-0"
        style={{ border: "none", width: "100%", height: "525px" }}
      >
        <div className="img-box">
          <Card.Img
            variant="top"
            className=" image "
            src={img}
            style={{ borderRadius: "20px" }}
          />
          <div className="img-overlay"></div>
        </div>
        <Card.Body className="text-center pt-2">
          <p className="fs-6">{title}</p>
          <Card.Text>${price}</Card.Text>
          <Link
            to={`/watchDetails/${_id}`}
            style={{
              backgroundColor: "transparent",
              color: "#eec277",
              border: "2px solid",
              textDecoration: "none",
            }}
            className="px-4 py-2 fw-bold "
          >
            See Details
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Watch;
