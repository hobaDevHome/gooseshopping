import React from "react";

import { products } from "../data";
import FlashSaleProductCard from "./FlashSaleProductCard";

import Grid from "@mui/material/Grid";

const FlashSaleItems = () => {
  return (
    <Grid
      container
      xs={12}
      marginTop={-15}
      display={"flex"}
      justifyContent={"center"}
    >
      <Grid item container xs={11} justifyContent={"center"} columnSpacing={5}>
        {products.slice(0, 3).map((product) => {
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
              <FlashSaleProductCard product={product} key={product.id} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default FlashSaleItems;
