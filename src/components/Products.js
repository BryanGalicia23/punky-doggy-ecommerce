import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Product from "./Product.js";
import products from "../product-data";

export default function Products() {
  return (
    <Box sx={{ flexGrow: 1, padding: "1rem" }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={6} md={4} lg={3}>
            <Product key={product.id} product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
