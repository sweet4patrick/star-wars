import { useState, useMemo } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { API_LISTS } from "../constants";
import debounce from "lodash.debounce";

const SearchForm = ({ handleChangeCategory, handleChangeSearch }) => {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const onChangeSelect = (value) => {
    setSearch("");
    setCategory(value);
    handleChangeCategory(value);
    handleChangeSearch("");
  };

  const debounceFn = useMemo(
    () => debounce(handleChangeSearch, 1000),
    [handleChangeSearch]
  );

  const onChangeSearch = (searchString) => {
    setSearch(searchString);
    debounceFn(searchString);
  };

  return (
    <Box sx={{ py: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="star-category-label">Categories</InputLabel>
            <Select
              labelId="star-category-label"
              id="star-category-select"
              value={category}
              label="Categories"
              onChange={(e) => onChangeSelect(e.target.value)}
              sx={{ textTransform: "capitalize" }}
            >
              {Object.keys(API_LISTS).map((e, index) => (
                <MenuItem
                  value={e}
                  key={`select_${index}`}
                  sx={{ textTransform: "capitalize" }}
                >
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={9}>
          <FormControl fullWidth>
            <TextField
              label="Search ..."
              variant="outlined"
              value={search}
              onChange={(e) => onChangeSearch(e.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchForm;
