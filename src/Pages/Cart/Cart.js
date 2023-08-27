import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './Cart.css';

import Navigation from '../../Components/Shared/Navigation/Navigation';
import StripeCheckout from 'react-stripe-checkout';
import {
  addToCart,
  clearCart,
  removeFromCart,
} from '../../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const { totalPrice, totalQuantity, shipping } = useSelector(
    (state) => state.cart
  );
  const onToken = () => {};

  const dispatch = useDispatch();
  return (
    <>
      <Navigation />
      <div
        style={{
          paddingTop: 70,
          paddingBottom: 70,
        }}
      >
        <Row className="cartContainer mx-5 ">
          <Col xs={12} sm={12} md={7} lg={9} className="watchInfo ">
            {cartItems.length ? (
              cartItems?.map((product) => (
                <div className="cartProduct" key={product._id}>
                  <div className="watchDetail ">
                    <img src={product.img} alt="" style={{ width: 200 }} />
                  </div>
                  <div className="details">
                    <p>
                      <b>Watch: </b>
                      {product.title}
                    </p>
                    <p>
                      <b>ID: </b>
                      {product._id}
                    </p>
                  </div>
                  <div className="watchPrice">
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <div className="watchAmountContainer">
                        <AiOutlineMinus
                          className="mx-2"
                          onClick={() => dispatch(removeFromCart(product))}
                        />
                        <h5 style={{ padding: '10px 15px' }}>
                          {product.quantity}
                        </h5>
                        <AiOutlinePlus
                          className="mx-2"
                          onClick={() => dispatch(addToCart(product))}
                        />
                      </div>
                      <button
                        style={{
                          padding: '5px 15px',

                          margin: 20,
                          marginBottom: 40,
                          border: 0,
                        }}
                        onClick={() => dispatch(clearCart())}
                      >
                        X
                      </button>
                    </div>

                    <p className="productPrice">${product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h1>No Items In The Cart</h1>
              </div>
            )}
          </Col>
          <Col className="totalCost mx-5" xs={12} sm={12} md={5} lg={3}>
            <h1 className="text-center">ORDER SUMMEERY</h1>
            <div className="items">
              <p>Subtoal</p>
              <p>$ {totalPrice}</p>
            </div>
            <div className="items">
              <p>Estimated Shipping</p>
              <p>$ {shipping.toFixed(2)}</p>
            </div>
            {/*   <div className="items">
            <p>Shipping Discount</p>
            <p>$ 4.90</p>
          </div> */}
            <div className="items">
              <p style={{ fontWeight: 500, fontSize: '24px' }}>Total</p>
              <p style={{ fontWeight: 500, fontSize: '24px' }}>
                $ {totalPrice}
              </p>
            </div>

            <StripeCheckout
              name="TIMEKEEPER"
              image="https://images-platform.99static.com//HaKkPvcoSSm26TK6XjfpsnIeXCk=/0x0:1920x1920/fit-in/500x500/99designs-contests-attachments/125/125228/attachment_125228152"
              billingAddress
              shippingAddress
              description={`Your total is $${totalPrice}`}
              amount={cartItems?.total * 100}
              token={onToken}
              key={process.env.KEY}
            >
              <button className="checkoutBtn">CHECKOUT NOW</button>
            </StripeCheckout>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Cart;
