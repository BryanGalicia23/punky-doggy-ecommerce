import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import puppy from "../assets/dogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase.js";
import { actionTypes } from "../reducer";

export default function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      navigate("/");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#3399ff" }}>
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={puppy} alt="puppy" />
            </IconButton>
          </Link>
          <Typography
            fontWeight="bold"
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, flexShrimp: 1 }}
          >
            {user ? "Welcome Pet Lover" : "Hello Guest"}
          </Typography>
          <Link to="/signin-page" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAuth}
              fontWeight="bold"
            >
              {user ? "Sign Out" : "Sign In"}
            </Button>
          </Link>
          <Link to="/checkout-page">
            <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={basket.length} color="error">
                <ShoppingCartIcon fontSize="large" color="action" />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
