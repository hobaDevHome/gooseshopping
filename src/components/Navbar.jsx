import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import { colors } from "../constants";

import Logo from "../images/goos_logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const pages = ["Home", "Bags", "Sneakers", "Belts", "Contact Us"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        paddingTop: 3,
        width: "100%",
      }}
    >
      <Toolbar disableGutters>
        <Grid
          container
          alignItems="center"
          display={{ xs: "none", md: "flex" }}
          direction="row"
          justifyContent="space-between"
        >
          <Grid item>
            <Link to="/">
              <img
                src={Logo}
                alt=""
                style={{
                  width: "160px",
                  height: "70px",
                  objectFit: "contian",
                  display: "block",
                  padding: 10,
                }}
              />
            </Link>
          </Grid>
          <Grid item>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                alignSelf: "end",
                justifySelf: "end",
                marginRight: 5,
                alignItems: "center",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: colors.textBlack,
                    display: "block",
                    marginLeft: 5,
                    fontWeight: "bold",
                  }}
                >
                  {page}
                </Button>
              ))}
              <ShoppingCartOutlinedIcon
                style={{ color: colors.textBlack, marginLeft: 5 }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="center"
          display={{ xs: "flex", md: "none" }}
          sx={12}
          direction="row"
          xs={{
            flexDirection: "row",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Fraunces",
              fontWeight: 900,
              fontSize: 30,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            ShowTime
          </Typography>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
