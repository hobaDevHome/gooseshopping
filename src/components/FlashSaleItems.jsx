import React from "react";
import { Link } from "react-router-dom";

import FlashSaleProductCard from "./FlashSaleProductCard";

import Grid from "@mui/material/Grid";

const FlashSaleItems = ({ products }) => {
  return (
    <Grid
      container
      xs={12}
      marginTop={-15}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid item container xs={11} justifyContent={"center"} columnSpacing={5}>
        {products.map((product) => {
          return (
            <Grid
              item
              sm={12}
              md={4}
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={`/products/${product.id}`}>
                <FlashSaleProductCard product={product} key={product.id} />
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default FlashSaleItems;
