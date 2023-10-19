// @ts-nocheck
import * as React from "react";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import { Link } from "react-router-dom";

import useAuth from "../hooks/useAuth";

import { colors } from "../constants";
import Logo from "../images/goos_logo.png";
import Guest from "../images/guest.png";
import User from "../images/user.jpg";

const pages = ["Home", "Bags", "Sneakers", "Belts", "Contact"];

function ResponsiveAppBar({ active = "" }) {
  const [selected, setselected] = useState(0);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [loginName, setLoginName] = useState("");
  const [loginImgUrl, setLoginImgUrl] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (active) {
      setselected(pages.findIndex((e) => e === active));
    } else {
      setselected(-1);
    }
  }, [active]);

  useEffect(() => {
    if (currentUser) {
      setLoginName(currentUser.displayName);
      setLoginImgUrl(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handSingInOut = () => {
    if (currentUser) {
      signout();
    } else {
      navigate("/singin");
    }
  };

  const signout = () => {
    signOut(auth)
      .then(() => {
        navigate("/singin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        paddingTop: 3,
        width: "100%",

        paddingRight: 3,
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

              {currentUser ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: colors.buttonBlue,
                    alignItems: "center",
                  }}
                >
                  <img
                    src={loginImgUrl}
                    alt=""
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      objectFit: "contain",
                      display: "block",
                      padding: 10,
                    }}
                  />
                  {/* {currentUser.displayName} */}
                  <p style={{ cursor: "pointer" }} onClick={handSingInOut}>
                    Log Out
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    color: colors.buttonBlue,
                    alignItems: "center",
                  }}
                >
                  <img
                    src={Guest}
                    alt=""
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "contain",
                      display: "block",
                      padding: 10,
                    }}
                  />
                  <p style={{ cursor: "pointer" }} onClick={handSingInOut}>
                    Log In
                  </p>
                </div>
              )}
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
              <div style={{ color: colors.buttonBlue, marginLeft: 20 }}>
                {currentUser ? (
                  <>
                    <p style={{ cursor: "pointer" }} onClick={handSingInOut}>
                      {currentUser.displayName}
                      Log Out
                    </p>
                  </>
                ) : (
                  <p style={{ cursor: "pointer" }} onClick={handSingInOut}>
                    Log In
                  </p>
                )}
              </div>
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
