import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { colors } from "../constants";
import { cartItems } from "../data/data";
import Typography from "@mui/material/Typography";

import { makeStyles } from "@mui/styles";

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
  blueButton: {
    color: colors.white,
    height: "100%",
    width: "100%",

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
    width: "100%",
    height: 3,
    backgroundColor: colors.divider,
    marginBottom: 10,
  },
  searchButtonContianer: {
    width: 120,
    margin: 0,
    padding: 0,
  },
  deleteButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.ligthPink,
    color: colors.darkPink,
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: {
    width: 80,
    height: 60,
    borderRadius: 3,
  },
  quantityContiner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.divider,
    borderRadius: 4,
    width: "50%",
    fontSize: 16,
    fontWeight: "bold",
    padding: "10px 15px",
  },
});

const Cart = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />

      <Grid container xs={12} marginTop={5}>
        <Grid container item xs={12} padding={1}>
          <Grid item sm={6}>
            PRODUCT
          </Grid>
          <Grid item sm={2}>
            PRICE
          </Grid>
          <Grid item sm={2}>
            QTY
          </Grid>
          <Grid item sm={2}>
            UNIT PRICE
          </Grid>
          <Grid container item xs={12} padding={1} marginTop={2}>
            <div className={classes.divider} />
          </Grid>
        </Grid>
        {cartItems.map((item) => {
          return (
            <Grid
              container
              item
              xs={12}
              padding={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Grid item sm={0.5}>
                <div className={classes.deleteButton}>X</div>
              </Grid>
              <Grid item sm={1.5}>
                <img
                  src={require(`../images/products/${item.category}/${item.title}/${item.imageSrc[0]}`)}
                  alt="cartitem"
                  className={classes.itemImage}
                />
              </Grid>
              <Grid item sm={4} sx={{ textAlign: "left" }}>
                {item.title}
              </Grid>
              <Grid item sm={2}>
                ${item.price * item.quantity}
              </Grid>
              <Grid item container sm={2} justifyContent={"center"}>
                <div className={classes.quantityContiner}>
                  <div style={{ color: colors.mainBlue, fontSize: 22 }}>-</div>
                  <div>{item.quantity}</div>
                  <div style={{ color: colors.mainBlue, fontSize: 22 }}>+</div>
                </div>
              </Grid>
              <Grid item sm={2}>
                ${item.price}
              </Grid>
              <Grid container item xs={12} padding={1} marginTop={2}>
                <div className={classes.divider} />
              </Grid>
            </Grid>
          );
        })}

        <Grid item container xs={12} flexDirection="row" marginTop={3}>
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
              <div className={classes.searchButtonContianer}>
                <div className={classes.blueButton}>Search</div>
              </div>
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
              <div className={classes.checkoutRow}>
                <div className={classes.divider} />
              </div>
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
              <div className={classes.checkoutRow}>
                <div className={classes.blueButton} style={{ height: 60 }}>
                  Check out
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Cart;
