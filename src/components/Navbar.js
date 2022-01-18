import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import puppy from "../assets/pukki.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

export default function Navbar() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ¡Bienvenido!
          </Typography>
          <Button variant="outlined" color="inherit">
            Sign In
          </Button>
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
