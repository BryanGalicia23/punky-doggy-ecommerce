import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import CheckoutCard from "./CheckoutCard.js";
import Total from "./Total.js";
import { useStateValue } from "../StateProvider.js";

export default function CheckoutPage() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Box sx={{ flexGrow: 1, padding: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" gutterButtom variant="h4">
            Shopping Cart
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Typography align="center" gutterButtom variant="h4">
            <Total />
          </Typography>
        </Grid>
        <Grid container spacing={2} item xs={12} sm={12} md={8} lg={8}>
          {basket.length === 0 ? (
            <img
              style={{
                width: "300px",
                alignItems: "center",
                marginLeft: "3rem",
              }}
              src="https://www.porticodemexico.com.mx/imagenes/carrito/Carro_Vacio.png"
              alt="carrito vacio"
            />
          ) : (
            ""
          )}
          {basket?.map((item) => (
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <CheckoutCard key={item.id} product={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
