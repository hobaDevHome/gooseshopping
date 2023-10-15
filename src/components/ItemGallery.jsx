import React from "react";
import { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { colors } from "../constants";
const useStyles = makeStyles({
  bigImage: {
    width: 430,
    height: 320,
    objectFit: "contain",

    borderRadius: 4,
  },
  thumbnail: {
    width: 100,
    height: 100,

    objectFit: "contain",
    cursor: "pointer",
    margin: 0,
    padding: 0,
    display: "block",
  },
  thumbBox: {
    width: 102,
    height: 102,
    marginRight: 10,
    "&:hover": {
      border: "1px solid green",
    },
  },
  thumbContianer: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  thumbClicked: {
    border: "2px solid blue",
  },
});

const ItemGallery = ({ imagesList, category, title }) => {
  const [activeThumb, setActiveThumb] = useState(0);
  const classes = useStyles();
  const ref = useRef(null);

  let mapped = imagesList.map((e) =>
    require(`../images/products/${category}/${title}/${e}`)
  );

  mapped = mapped.length > 4 ? mapped.slice(0, 4) : mapped;
  const addHover = () => {
    console.log("test");
    const div = ref.current;

    if (div) {
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img src={mapped[activeThumb]} alt="" className={classes.bigImage} />

      <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
        {mapped.map((e, index) => {
          return (
            <div
              key={index}
              ref={ref}
              onClick={() => setActiveThumb(index)}
              onMouseEnter={() => (activeThumb === index ? null : addHover())}
              className={`${classes.thumbBox} ${
                activeThumb === index ? `${classes.thumbClicked}` : ""
              }`}
            >
              <div className={classes.thumbContianer}>
                <img src={e} alt="thumbnail" className={classes.thumbnail} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemGallery;

function mapImagesForLocal(list) {
  let mappledList = [...list];

  return mappledList;
}