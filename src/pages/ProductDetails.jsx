import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { colors } from "../constants";
import { products } from "../data";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import facebooklogo from "../images/facebook.png";
import twitterlogo from "../images/twitter.png";

import { makeStyles } from "@mui/styles";
import ProductSection from "../components/ProductSection";
import ItemGallery from "../components/ItemGallery";

const colorsList = ["blue", "red", "black", "yellow"];

const useStyles = makeStyles({
  socialIcon: {
    marginRight: 10,
  },

  socialButton: {
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
    marginTop: 10,
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
    width: 140,
    height: 100,
    borderRadius: 3,
  },
  quantityContiner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.divider,
    borderRadius: 4,
    width: "25%",
    fontSize: 16,
    fontWeight: "bold",
    padding: "10px 15px",
  },
  colorsDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "100px",
  },
  colorButton: {
    "width": 28,
    "height": 28,
    "borderRadius": 14,
    "marginRight": 15,
    "marginTop": 10,
    "&:hover": {
      border: "1px solid green",
      cursor: "pointer",
    },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.titleBlue,
    marginBottom: 15,
    width: "80%",
    alignSelf: "start",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "start",
  },
  price: {
    fontSize: 18,
    color: colors.mainBlue,
    fontWeight: "bold",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },
  beforeprice: {
    color: "gray",
    fontWeight: "normal",
    textDecoration: "line-through",
    marginLeft: 10,
  },
  discount: {
    color: colors.iconPink,
    marginLeft: 10,
  },
});

const ProductDetails = () => {
  const [size, setSize] = useState("");
  const classes = useStyles();
  let { id } = useParams();

  let currentProduct = products.find((e) => e.id === Number(id));

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  if (!currentProduct) {
    return <h2>prodcut not found</h2>;
  }
  let newPrice = Math.floor(
    currentProduct.price -
      (currentProduct.price * currentProduct.discount) / 100
  );

  return (
    <div>
      <Navbar />

      <Grid container xs={12} marginTop={5}>
        <Grid item container xs={12} marginTop={1} marginBottom={4}>
          <Grid item container xs={5}>
            <ItemGallery
              imagesList={currentProduct.imageSrc}
              category={currentProduct.category}
            />
          </Grid>
          <Grid item container xs={1}></Grid>
          <Grid
            item
            container
            xs={6}
            columnSpacing={1}
            display={"flex"}
            flexDirection="column"
          >
            <p className={classes.title}>{currentProduct.title}</p>
            <div className={classes.rating}>
              <Rating name="read-only" value={currentProduct.rating} readOnly />
            </div>

            <div className={classes.divider} />
            <p className={classes.price}>
              ${newPrice}
              {currentProduct.discount !== 0 && (
                <>
                  <span className={classes.beforeprice}>
                    ${currentProduct.price}
                  </span>
                  <span className={classes.discount}>
                    {currentProduct.discount}% Off
                  </span>
                </>
              )}
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "40%",
                justifyContent: "space-between",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", flex: 3 }}>
                <p>Availability:</p>
              </div>
              <div style={{ display: "flex", flex: 1 }}>
                <p>In stock</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "40%",
                justifyContent: "space-between",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", flex: 3 }}>
                <p>Category:</p>
              </div>
              <div style={{ display: "flex", flex: 1 }}>
                <p>{currentProduct.category}</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "40%",
                justifyContent: "space-between",
                textAlign: "left",
              }}
            >
              <p>Free shipping</p>
            </div>
            <div className={classes.divider} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "20px",
              }}
            >
              <p>Select Color:</p>
              <div className={classes.colorsDiv}>
                {colorsList.map((e) => {
                  return (
                    <div
                      className={classes.colorButton}
                      style={{ backgroundColor: e }}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <p>Size</p>
              <Box sx={{ minWidth: 120, textAlign: "left", marginLeft: 20 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Size</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={size}
                    label="Size"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>xs</MenuItem>
                    <MenuItem value={20}>sm</MenuItem>
                    <MenuItem value={30}>md</MenuItem>
                    <MenuItem value={40}>lg</MenuItem>
                    <MenuItem value={50}>xl</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className={classes.divider} />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div className={classes.quantityContiner}>
                <div style={{ color: colors.mainBlue, fontSize: 22 }}>-</div>
                <div>7</div>
                <div style={{ color: colors.mainBlue, fontSize: 22 }}>+</div>
              </div>
              <Box
                sx={{
                  backgroundColor: colors.cartBlue,
                  padding: "5px 20px",
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: "row",
                  color: colors.mainBlue,
                  alignItems: "center",
                  height: "50px",
                }}
              >
                <ShoppingCartOutlinedIcon sx={{ marginRight: 3 }} />
                <p>Add To Cart</p>
              </Box>
            </div>

            <div className={classes.divider} />
          </Grid>
        </Grid>
        <Grid item container xs={12} marginTop={1} marginBottom={4}>
          <Grid item container xs={6}></Grid>
          <Grid item container xs={6} columnSpacing={1}>
            <Grid item xs={6}>
              <SocialMediaButton type={"facebook"} />
            </Grid>
            <Grid item xs={6}>
              <SocialMediaButton type={"twitter"} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} marginTop={1}>
          <ProductInfoPanel item={currentProduct} />
        </Grid>
      </Grid>

      <ProductSection title="RELATED PRODUCTS" list={products.slice(0, 4)} />

      <Footer />
    </div>
  );
};

export default ProductDetails;

const ProductInfoPanel = ({ item }) => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        textAlign: "left",
        backgroundColor: colors.divider,
        borderRadius: 2,
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Product Infomation" value="1" />
            <Tab label="Reviews" value="2" />
            <Tab label="More Details" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <h3>{item.title}</h3>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
        </TabPanel>
        <TabPanel value="2">
          <p>Review 1</p>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
          <p>Review 2</p>

          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
        </TabPanel>
        <TabPanel value="3">
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
          <p>
            air max are always very comfortable fit, clean and just perfect in
            every way. just the box was too small and scrunched the sneakers up
            a little bit, not sure if the box was always this small but the 90s
            are and will always be one of my favorites.
          </p>
        </TabPanel>
      </TabContext>
    </Box>
  );
};

const SocialMediaButton = ({ type }) => {
  const classes = useStyles();

  let bgColor = type === "facebook" ? colors.faceboodBlue : colors.twitterBlue;
  let icon = type === "facebook" ? facebooklogo : twitterlogo;
  let title = type === "facebook" ? "Share on Facebook" : "Share on Twitter";
  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        padding: "10px 20px",
        borderRadius: 1,
        color: colors.white,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={icon} alt="facebook" className={classes.socialIcon} />
      {title}
    </Box>
  );
};
