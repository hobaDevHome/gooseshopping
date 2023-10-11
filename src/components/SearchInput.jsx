import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { colors } from "../constants";

const useStyles = makeStyles({
  searchInputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    margin: "50px auto",
    borderRadius: 3,
    borderColor: colors.buttonBlue,
    borderWidth: 2,
    borderStyle: "solid",
  },
  searchButton: {
    width: 120,
    height: 40,
    color: colors.white,
    padding: "10px 20px",
    backgroundColor: colors.buttonBlue,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
});

const SearchInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.searchInputContainer}>
      <TextField
        fullWidth
        placeholder="Search query..."
        sx={{ "& .MuiOutlinedInput-notchedOutline": { border: "none" } }}
      />

      <div className={classes.searchButton}>Search</div>
    </div>
  );
};

export default SearchInput;
