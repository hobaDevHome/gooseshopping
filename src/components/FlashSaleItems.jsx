import React from "react";

import { products } from "../data";
import FlashSaleProductCard from "./FlashSaleProductCard";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: "0px auto",

    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
    padding: 0,
  },
});

const FlashSaleItems = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {products.slice(0, 3).map((product) => {
        return <FlashSaleProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default FlashSaleItems;
