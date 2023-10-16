import * as React from "react";
import { useState, useEffect } from "react";
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

const pages = ["Home", "Bags", "Sneakers", "Belts", "Contact"];

function ResponsiveAppBar({ active = "" }) {
  const [selected, setselected] = useState(0);

  const [anchorElNav, setAnchorElNav] = useState(null);
  useEffect(() => {
    if (active) {
      setselected(pages.findIndex((e) => e === active));
    } else {
      setselected(-1);
    }
  }, [active]);

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
          display={{ xs: "none", sm: "none", md: "flex" }}
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
                  objectFit: "contain",
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
              {pages.map((page, index) => (
                <Link
                  to={page === "Home" ? "/" : `/${page}`}
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: `${
                        selected === index ? colors.mainBlue : colors.textBlack
                      }`,
                      display: "block",
                      marginLeft: 5,
                      fontWeight: "bold",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
              <Link to="/Cart">
                <ShoppingCartOutlinedIcon
                  style={{ color: colors.textBlack, marginLeft: 5 }}
                />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          display={{ xs: "flex", sm: "flex", md: "none" }}
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon sx={{ color: "black" }} />
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
              {pages.map((page, index) => (
                <Link
                  to={page === "Home" ? "/" : `/${page}`}
                  key={index}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </div>

          <Link to="/">
            <img
              src={Logo}
              alt=""
              style={{
                width: "160px",
                height: "70px",
                objectFit: "contain",
                display: "block",
                padding: 10,
              }}
            />
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
