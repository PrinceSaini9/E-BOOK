import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Review from './Review';


const PaymentForm = ({ checkoutToken, nextStep, backStep}) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

   nextStep();
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button onClick={e=>handleSubmit(e)} variant="contained"  style={{ backgroundColor: '#1C2331', color: '#FFFF' }} >
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
    </>
  );
};

export default PaymentForm;
