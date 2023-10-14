import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeAdd from "../components/HomeAdd";
import { products } from "../data";

import Grid from "@mui/material/Grid";
import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";

const Category = ({ category }) => {
  const filteredPrdocuts = products.filter(
    (item) => item.category === category
  );

  return (
    <div>
      <Navbar active={`${category[0].toUpperCase() + category.slice(1)}`} />
      <Grid container xs={12} marginTop={10}>
        <Grid container item xs={3}>
          <Filters />
        </Grid>
        <Grid container item xs={9}>
          <HomeAdd />
          {filteredPrdocuts.length > 0 && (
            <ProductsList productsList={filteredPrdocuts} />
          )}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Category;
