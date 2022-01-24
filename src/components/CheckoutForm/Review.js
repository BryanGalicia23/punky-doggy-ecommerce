import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import accounting from "accounting";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket?.map((product) => (
          <ListItem key={product.id}>
            <ListItemText primary={product.name} secondary={`Quantity: ${1}`} />
            <Typography variant="body2">
              {accounting.formatMoney(product.price)}
            </Typography>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText fontWeight="bolder" primary="Total" />
          <Typography variant="subtitle1" fontWeight="bolder">
            {accounting.formatMoney(getBasketTotal(basket))}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
