import React from "react";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@mui/styles";
import ProductCard from "./ProductCard";

const useStyles = makeStyles({
  column: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingTop: 0,
    margin: 0,
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

const ProductSection = ({ title, list }) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} marginTop={7}>
      <div className={classes.column}>
        <p className={classes.title}>{title}</p>
      </div>
      <Grid container item xs={12} padding={1}>
        {list.map((product) => {
          return (
            <Grid item xs={12} md={4} lg={3} padding={1} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default ProductSection;
