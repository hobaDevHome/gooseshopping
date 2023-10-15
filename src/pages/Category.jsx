import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeAdd from "../components/HomeAdd";

import Grid from "@mui/material/Grid";
import Filters from "../components/Filters";
import ProductsList from "../components/ProductsList";

const Category = ({ category, products }) => {
  const [productsList, setproductsList] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const filterProducts = (item, value) => {
    setFilter(item);
    setFilterValue(value);
  };

  useEffect(() => {
    const prdocuts = products.filter((item) => item.category === category);

    console.log("filter", filter);
    if (filter !== "") {
      const filteredProducts = prdocuts.filter(
        (e) => e[filter] === filterValue
      );
      setproductsList(filteredProducts);
    } else {
      setproductsList(prdocuts);
    }
  }, [filter, filterValue, category, products]);
  console.log("filter", filter);
  console.log("filterValue", filterValue);

  return (
    <div>
      <Navbar active={`${category[0].toUpperCase() + category.slice(1)}`} />
      <Grid container xs={12} marginTop={10}>
        <Grid container item xs={3}>
          <Filters products={productsList} filterProducts={filterProducts} />
        </Grid>
        <Grid container item xs={9}>
          <HomeAdd />
          {productsList.length > 0 && (
            <ProductsList productsList={productsList} />
          )}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Category;
