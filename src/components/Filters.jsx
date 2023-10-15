import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import { colors } from "../constants";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  column: {
    marginTop: 60,
    marginRight: 30,
    width: "100%",
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
    cursor: "pointer",
  },
  fliterBox: {
    backgroundColor: colors.divider,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
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
  clear: {
    backgroundColor: colors.darkerBlue,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    alignItems: "center",
    cursor: "pointer",
    color: colors.white,
  },
});

const Filters = ({ products, filterProducts }) => {
  const classes = useStyles();

  const onItemCLicked = (item, value) => {
    filterProducts(item, value);
  };

  const clearFilters = () => {
    let item = "";
    let value = "";
    filterProducts(item, value);
  };

  const getFilterNames = (factor) => {
    let categories = products.map((e) => e[factor]);
    categories = categories.filter(
      (e, index) => categories.indexOf(e) === index
    );

    return categories;
  };

  const colros = getFilterNames("color");
  const brands = getFilterNames("brand");

  return (
    <div className={classes.column}>
      <div onClick={clearFilters} className={classes.clear}>
        <DeleteIcon style={{ marginRight: 10, marginLeft: 10 }} />
        <p>Clear filters</p>
      </div>
      {brands.length > 0 && (
        <FitlesBox
          list={brands}
          title="Brand"
          products={products}
          onItemCLicked={onItemCLicked}
        />
      )}
      {colros.length > 0 && (
        <FitlesBox
          list={colros}
          title="Color"
          products={products}
          onItemCLicked={onItemCLicked}
        />
      )}
    </div>
  );
};

export default Filters;

const FitlesBox = ({ list, title, products, onItemCLicked }) => {
  const onSelected = (item, value) => {
    onItemCLicked(item, value);
  };

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
      <Typography variant="h6" gutterBottom sx={{ textTransform: "uppercase" }}>
        {title}
      </Typography>
      {title === "Color" ? (
        <div className={classes.colorsDiv}>
          {list.map((e, index) => {
            return (
              <div
                key={index}
                className={classes.colorButton}
                style={{ backgroundColor: e }}
                onClick={() => onSelected("color", e)}
              ></div>
            );
          })}
        </div>
      ) : (
        <>
          {list.map((item, index) => {
            let selectedFitler = products.filter((e) => e.brand === item);

            return (
              <Link
                key={index}
                underline="none"
                sx={{ fontSize: 20 }}
                className={classes.listItem}
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => onSelected("brand", item)}
                >
                  {item}
                </div>
                <div>{selectedFitler.length}</div>
              </Link>
            );
          })}
        </>
      )}
    </Grid>
  );
};
