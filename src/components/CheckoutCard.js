import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import accounting from "accounting";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

export default function CheckoutCard({ product: { id, name, image, price } }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: actionTypes.DELETE_ONE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={name} subheader="Disponible" />
      <CardMedia component="img" height="194" image={image} alt={name} />
      <CardActions disableSpacing>
        <IconButton onClick={removeItem}>
          <DeleteIcon fontSize="large" />
        </IconButton>
        <Typography color="textSecondary" variant="h5" sx={{ flexGrow: 1 }}>
          {accounting.formatMoney(price)}
        </Typography>
      </CardActions>
    </Card>
  );
}
