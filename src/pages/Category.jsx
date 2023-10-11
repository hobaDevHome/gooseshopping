import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeAdd from "../components/HomeAdd";

import Grid from "@mui/material/Grid";
import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";

const Category = ({ category }) => {
  return (
    <div>
      <Navbar />
      <Grid container xs={12} marginTop={10}>
        <Grid container item xs={3}>
          <Filters />
        </Grid>
        <Grid container item xs={9}>
          <HomeAdd />
          <ProductsList category={category} />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Category;
