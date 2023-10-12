import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Divider from "@mui/material/Divider";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { colors } from "../constants";
import Typography from "@mui/material/Typography";
import callpic from "../images/call.png";

import { makeStyles } from "@mui/styles";
import SearchInput from "../components/SearchInput";
const useStyles = makeStyles({
  container: {},
  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "60%",

    borderRadius: 3,
    borderColor: colors.divider,
    borderWidth: 2,
    borderStyle: "solid",
  },
  searchButton: {
    width: 120,
    height: 40,
    color: colors.white,
    padding: "10px 20px",
    backgroundColor: colors.darkerBlue,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    borderRadius: 3,
  },
  checkoutRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  divider: {
    width: "60%",
    height: 3,
    backgroundColor: colors.divider,
    marginBottom: 10,
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />

      <Grid container xs={12} marginTop={5}>
        <Grid container item xs={12} padding={1}>
          <Grid item sm={12}>
            header
          </Grid>
          <Grid item sm={12}>
            cart item
          </Grid>
          <Grid item sm={12}>
            cart item
          </Grid>
        </Grid>

        <Grid item container xs={12} flexDirection="row">
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            justifyContent={"flex-start"}
            alignSelf={"flex-start"}
          >
            <div className={classes.searchInputContainer}>
              <TextField
                fullWidth
                placeholder="Voucher code"
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
              />

              <div className={classes.searchButton}>Search</div>
            </div>
          </Grid>

          <Grid item container xs={12} sm={12} md={6}>
            <Grid
              container
              item
              xs={12}
              flexDirection={"column"}
              alignItems={"end"}
            >
              <div className={classes.checkoutRow}>
                <Typography
                  variant="body2"
                  display="block"
                  gutterBottom
                  paddingBottom={{ sm: 1, md: 3 }}
                  sx={{ textAlign: "left" }}
                >
                  Subtotal
                </Typography>
                <Typography
                  variant="body2"
                  display="block"
                  gutterBottom
                  paddingBottom={{ sm: 1, md: 3 }}
                  sx={{ textAlign: "left" }}
                >
                  $998
                </Typography>
              </div>
              <div className={classes.checkoutRow}>
                <Typography
                  variant="body2"
                  display="block"
                  gutterBottom
                  paddingBottom={{ sm: 1, md: 3 }}
                  sx={{ textAlign: "left" }}
                >
                  Shipping fee
                </Typography>
                <Typography
                  variant="body2"
                  display="block"
                  gutterBottom
                  paddingBottom={{ sm: 1, md: 3 }}
                  sx={{ textAlign: "left" }}
                >
                  $20
                </Typography>
              </div>
              <div className={classes.checkoutRow}>
                <Typography
                  variant="body2"
                  display="block"
                  gutterBottom
                  paddingBottom={{ sm: 1, md: 3 }}
                  sx={{ textAlign: "left" }}
                >
                  Coupon
                </Typography>
                <Typography
                  variant="body2"
                  display="block"
                  gutterBottom
                  paddingBottom={{ sm: 1, md: 3 }}
                  sx={{ textAlign: "left" }}
                >
                  No
                </Typography>
              </div>
              <div className={classes.divider}></div>
              <div className={classes.checkoutRow}>
                <Typography
                  variant="h5"
                  display="block"
                  gutterBottom
                  paddingBottom={{ sm: 1, md: 3 }}
                  sx={{ textAlign: "left" }}
                >
                  TOTAL
                </Typography>
                <Typography
                  variant="h5"
                  display="block"
                  gutterBottom
                  paddingBottom={{ sm: 1, md: 3 }}
                  sx={{ textAlign: "left" }}
                >
                  $118
                </Typography>
              </div>
              <div className={classes.searchButton}>Check out</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Contact;
