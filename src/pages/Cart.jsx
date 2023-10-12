import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
  lefContainer: {
    displah: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.mainBlue,
  },
  rightContainer: {
    backgroundColor: colors.white,
  },
  column: {
    display: "flex",
    flexDirection: "column",

    margin: 0,
    padding: 0,
    paddingLeft: 10,
    color: colors.white,
    width: "80%",
  },

  image: {
    width: 400,
    height: 450,
    objectFit: "contian",
    marginTop: -80,
    position: "absolute",
    left: 10,
    top: "30%",
  },
  title: {
    fontSize: 40,
    textAlign: "left",
    margin: 0,
  },

  text: {
    fontSize: 18,
    textAlign: "left",
    margin: 0,
    marginTop: 20,
  },
  shopnow: {
    fontSize: 16,
    textAlign: "left",
    margin: 0,
    marginTop: 20,
  },
  arc: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: colors.mainBlue,
    position: "absolute",
    right: "48%",
    zIndex: 1,
  },
  getintouch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "self-start",
  },
  contactInfo: {
    color: colors.white,
    zIndex: 2,
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
          <Grid item sm={12} xs={12} md={6}>
            voutncer line
          </Grid>
          <Grid item container xs={12} md={6}>
            <Grid item sm={12}>
              shopping info line
            </Grid>
            <Grid item sm={12}>
              shopping info line
            </Grid>
            <Grid item sm={12}>
              shopping info line
            </Grid>
            <Grid item sm={12}>
              shopping info line
            </Grid>
            <Grid item sm={12}>
              shopping info line
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default Contact;
