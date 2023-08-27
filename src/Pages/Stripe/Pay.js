import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from '../../Components/Shared/Navigation/Navigation';

const KEY =
  'pk_test_51JwoPxKpxt7jxnaYKaDS5lQsYEJRDuOGtjvlHALqPPskyjeWhCLJBmQxnkYWyHVS1dY3u3NXHfFQTth554jcSlAP00FsoVRA4u';

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post('http://localhost:5000/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <>
      <Navigation />
      <div
        style={{
          height: ' 100vh ',
          display: ' flex ',
          alignItems: ' center ',
          justifyContent: ' center ',
        }}
      >
        {stripeToken ? (
          <span span> Processing . Please wait ... </span>
        ) : (
          <StripeCheckout
            name="Time Keeper"
            image="https://images-platform.99static.com//HaKkPvcoSSm26TK6XjfpsnIeXCk=/0x0:1920x1920/fit-in/500x500/99designs-contests-attachments/125/125228/attachment_125228152"
            billingAddress
            shippingAddress
            description="Your Total is $20"
            amount={2000}
            token={onToken}
            stripeKey={KEY}
          >
            <button
              button
              style={{
                border: ' none ',
                width: 120,
                borderRadius: 5,
                padding: ' 20px ',
                backgroundColor: ' black ',
                color: ' white ',
                fontWeight: ' 600 ',
                cursor: ' pointer ',
              }}
            >
              Pay Now
            </button>
          </StripeCheckout>
        )}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione
          nam optio ullam harum doloribus placeat molestias dolor quasi magnam!
        </p>
      </div>
    </>
  );
};

export default Pay;
