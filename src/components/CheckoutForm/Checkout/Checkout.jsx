import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, Button } from '@material-ui/core';

import { commerce } from '../../../lib/commerce';
import useStyles from './styles'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

const steps = ['shipping address', 'payment details']

const Checkout = ({ cart, order, onCaptureCheckout, error, handleEmptyCart }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();

  useEffect(() => {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });   
          setCheckoutToken(token);
        } catch (error) {          
      }
      }
    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((previousActiveStep) => previousActiveStep + 1);
  const backStep = () => setActiveStep((previousActiveStep) => previousActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Confirmation = () => (
    <>
      <div style={{minHeight: '40vh', textAlign: 'center'}}>
        <Typography variant="h5">Thank you for your order!</Typography>
        <Typography variant="subtitle1">Your order will ship within 3 business days</Typography>
      </div>
      <div>

        <Typography style={{ textAlign: 'center' }} variant="subtitle1">Want €5 off of your next order? Take a quick survey about todays order.</Typography>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNyWhPvDnBI24eCEN_mg5izaDy_RsTJuc29uSj7G0YtE0CrQ/viewform" target="__blank" style={{textDecoration: 'none'}}>
          <Button style={{ width: '100%' }} size="large" type="button" variant="contained" color="primary">Give Feedback</Button>
        </a>
      </div>
    </>
  )

  const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={checkoutToken} next={next} />
    : <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
        handleEmptyCart={handleEmptyCart}
      />

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout
