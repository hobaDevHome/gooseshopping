import React from "react";
import { colors } from "../constants";
import Logo from "../images/goos_logo.png";
import cards from "../images/Brands.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.footerBlue,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 70,
    paddingBottom: 50,
    marginTop: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    paddingTop: 20,
    paddingLeft: 20,
    maxWidth: 220,
  },
  text: {
    marginTop: 20,
    textAlign: "left",
    fontSize: 14,
  },
  logo: {
    width: "70",
    height: "26px",
    objectFit: "contian",
    display: "block",
    borderRadius: 8,
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  social: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  link: {
    fontSize: 16,
  },
  cardsContainer: {
    width: "90%",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
  },
  cards: {
    width: "180px",
    objectFit: "contian",
    display: "block",
  },
  copywriteContiner: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
  },
  copywrite: {
    color: colors.copywrite,
    fontSize: 14,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <div className={classes.column}>
          <div>
            <img src={Logo} alt="" className={classes.logo} />
          </div>
          <div>
            <p className={classes.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.title}>Follow Us</div>
          <div className={classes.text}>
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </div>
          <div className={classes.social}>
            <div>
              <FacebookIcon
                style={{ color: colors.faceboodBlue, marginRight: 60 }}
              />
            </div>
            <div>
              <TwitterIcon style={{ color: colors.twitterBlue }} />
            </div>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.title}>Contact Us</div>
          <div className={classes.text}>
            Goose, 4578 Marmora Road, Glasgow D04 89GR
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.title}>Infomation</div>
          <div className={classes.column}>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              About Us
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Infomation
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.title}>Service</div>
          <div className={classes.column}>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              About Us
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Infomation
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.title}>My Account</div>
          <div className={classes.column}>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              About Us
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Infomation
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className={classes.column}>
          <div className={classes.title}>Our Offers</div>
          <div className={classes.column}>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              About Us
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Infomation
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              className={classes.link}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.column}></div>
      <Divider
        flexItem
        sx={{
          marginLeft: "5%",
          marginRight: "5%",
          marginTop: 5,
          height: 1.2,
          backgroundColor: colors.white,
        }}
      />
      <div className={classes.cardsContainer}>
        <img src={cards} alt="" className={classes.cards} />
      </div>
      <div className={classes.copywriteContiner}>
        <span className={classes.copywrite}>
          © 2018 Ecommerce theme by www.bisenbaev.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
