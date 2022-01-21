import React, { useState } from "react";
import { Paper, StepLabel, Step, Stepper, Typography } from "@mui/material";
import useStyles from "./styles.js";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Shipping address", "Payment details"];
  const classes = useStyles();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm nextStep={nextStep} />
    ) : (
      <PaymentForm backStep={backStep} nextStep={nextStep} />
    );

  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Form />
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
