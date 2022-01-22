import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import Review from "./Review";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import accounting from "accounting";

const stripePromise = loadStripe(
  "pk_test_51JFOcaCmQo3nLUwxJYuLegokQDuZ3KoIbUv1xNjkfynLQ4viJGsnvNJipYWCo3DvepiCtueYDea3iSYldZTP3qXs00W48OapaC"
);

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240, 57, 122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = ({ backStep, nextStep }) => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <form>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Button variant="outlined" onClick={backStep}>
            Back
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={true}
          >
            PAY {accounting.formatMoney(getBasketTotal(basket))}
          </Button>
        </div>
      </form>
    </>
  );
};

const PaymentForm = ({ backStep, nextStep }) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm backStep={backStep} nextStep={nextStep} />
      </Elements>
    </>
  );
};

export default PaymentForm;
