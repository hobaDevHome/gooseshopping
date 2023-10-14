import React from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";

import { colors } from "../constants";

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
  },
  paginationDiv: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.divider,
    justifyContent: "center",
  },
});

const ProductsList = ({ productsList }) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} marginTop={7}>
      <Grid container item xs={12}>
        {productsList.map((product) => {
          return (
            <Grid item xs={12} md={6} lg={4} padding={1} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        container
        item
        xs={12}
        padding={1}
        marginTop={1}
        className={classes.paginationDiv}
      >
        <Pagination count={10} color="primary" />
      </Grid>
    </Grid>
  );
};

export default ProductsList;
