import React from "react";

import { colors } from "../constants";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    position: "relative",
    width: 350,
    height: 350,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.titleBlue,

    marginBottom: 15,
    marginTop: 5,
    position: "absolute",
    top: 20,
    left: 20,
    width: "50%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    argin: 0,
  },
  image: {
    width: 350,
    height: 350,
    objectFit: "cover",
    display: "block",
    borderRadius: 10,
    position: "relative",
  },

  price: {
    fontSize: 24,
    color: colors.mainBlue,
    fontWeight: "bold",
    padding: 0,
    margin: 0,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  discountDiv: {
    position: "absolute",
    top: 70,
    left: 20,
    fontWeight: "bold",
    fontSize: 24,
  },

  beforeprice: {
    color: "gray",
    fontWeight: "normal",
    textDecoration: "line-through",
  },
  discount: {
    color: colors.iconPink,
    marginLeft: 10,
  },
});

const FlashSaleProductCard = ({ product }) => {
  const classes = useStyles();
  let newPrice = Math.floor(
    product.price - (product.price * product.discount) / 100
  );

  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src={require(`../images/products/${product.category}/${product.imageSrc[0]}.png`)}
        alt="super flash sale"
      />
      <p className={classes.title}>{product.title}</p>
      <p className={classes.price}>${newPrice}</p>
      {product.discount !== 0 && (
        <div className={classes.discountDiv}>
          <span className={classes.beforeprice}>${product.price}</span>
          <span className={classes.discount}>{product.discount}% Off</span>
        </div>
      )}
    </div>
  );
};

export default FlashSaleProductCard;