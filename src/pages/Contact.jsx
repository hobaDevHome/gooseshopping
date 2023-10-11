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
    width: 500,
    height: 300,
    objectFit: "contian",
    marginTop: -80,
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
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Paper elevation={3} padding={0}>
        <Grid
          container
          xs={12}
          padding={0}
          marginTop={10}
          flexDirection={{ sm: "column-reverse", md: "row" }}
        >
          <Grid
            container
            item
            xs={12}
            md={6}
            padding={1}
            className={classes.lefContainer}
          >
            <Box
              className={classes.arc}
              visibility={{ sm: "hidden", md: "visible" }}
            />
            <div className={classes.column}>
              <p className={classes.title}>Adidas Men Running Sneakers</p>
              <p className={classes.text}>
                Performance and design. Taken right to the edge.
              </p>
              <p className={classes.shopnow}>SHOP NOW.</p>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            padding={7}
            className={classes.rightContainer}
          >
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{ textAlign: "left" }}
            >
              Full name
            </Typography>
            <TextField
              fullWidth
              label="Fullname"
              id="Fullname"
              sx={{ marginBottom: 3 }}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{ textAlign: "left" }}
            >
              Email
            </Typography>
            <TextField
              fullWidth
              label="Email"
              id="Email"
              sx={{ marginBottom: 3 }}
            />
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{ textAlign: "left" }}
            >
              Message
            </Typography>
            <TextField
              fullWidth
              label="Type your message"
              id="Message"
              multiline
              rows={10}
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid item xs={12} md={12} margin={12}>
        <SearchInput />
      </Grid>
      <Footer />
    </div>
  );
};

export default Contact;
