import { Paper, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles.js";

const Checkout = () => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
