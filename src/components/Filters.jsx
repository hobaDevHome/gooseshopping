import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

import { colors } from "../constants";
import { products } from "../data";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  column: {
    marginTop: 60,
    marginRight: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 20,
    // border: "1px solid red",
  },
  fliterBox: {
    backgroundColor: colors.divider,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    width: "100%",
  },
  colorsDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  colorButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 15,
    marginTop: 10,
    "&:hover": {
      border: "1px solid green",
      cursor: "pointer",
    },
  },
});

const Filters = () => {
  const classes = useStyles();

  const getFilterNames = (factor) => {
    let categories = products.map((e) => e[factor]);
    categories = categories.filter(
      (e, index) => categories.indexOf(e) === index
    );
    categories = categories.map((e) => e[0].toUpperCase() + e.slice(1));
    return categories;
  };

  const categories = getFilterNames("category");
  const colros = getFilterNames("color");
  const brands = getFilterNames("brand");

  return (
    <div className={classes.column}>
      {categories.length > 0 && (
        <FitlesBox list={categories} title="Category" />
      )}
      {colros.length > 0 && <FitlesBox list={colros} title="Color" />}
      {brands.length > 0 && <FitlesBox list={brands} title="Brand" />}

      <div></div>
    </div>
  );
};

export default Filters;

const FitlesBox = ({ list, title }) => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      className={classes.fliterBox}
      marginBottom={4}
      flexDirection={"column"}
      alignItems={"start"}
    >
      <Typography variant="h5" gutterBottom sx={{ textTransform: "uppercase" }}>
        {title}
      </Typography>
      {title === "Color" ? (
        <div className={classes.colorsDiv}>
          {list.map((e) => {
            return (
              <div
                className={classes.colorButton}
                style={{ backgroundColor: e }}
              ></div>
            );
          })}
        </div>
      ) : (
        <>
          {list.map((item) => {
            let selectedFitler = products.filter(
              (e) => e[title.toLowerCase()] === item.toLowerCase()
            );

            return (
              <Link
                href="#"
                underline="none"
                sx={{ fontSize: 24 }}
                className={classes.listItem}
              >
                <div>{item}</div>
                <div>{selectedFitler.length}</div>
              </Link>
            );
          })}
        </>
      )}
    </Grid>
  );
};
