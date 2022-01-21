import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Typography, Grid, Button } from "@mui/material";
import AddressInput from "./AddressInput";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const AddressForm = ({ nextStep }) => {
  const [{ shippingData }, dispatch] = useStateValue();
  const methods = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            //console.log(data);
            dispatch({
              type: actionTypes.SET_SHIPPING_DATA,
              shippingData: data,
            });
            nextStep();
          })}
        >
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
            <AddressInput required name="lastName" label="Last Name" />
            <AddressInput required name="address1" label="Address" />
            <AddressInput required name="email" label="Email address" />
            <AddressInput required name="city" label="City" />
            <AddressInput required name="postCode" label="Post Code" />
          </Grid>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2rem",
            }}
          >
            <Button component={Link} to="/checkout-page">
              Back to the Checkout Page
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
