import {
  RadioGroup,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  Radio,
  FormControlLabel,
  TextField,
  InputAdornment,
  Pagination,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import SearchIcon from "@mui/icons-material/Search";

const ProductList = () => {
  const { products, getProducts, fetchByParams } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(1);

  const count = Math.ceil(products.length / 3);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    console.log(searchParams.toString());
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  function currentData() {
    const begin = (page - 1) * 3;
    const end = begin + 3;
    return products.slice(begin, end);
  }

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid
            item
            sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
            md={9}
          >
            <Grid item md={12}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  minHeight: "40vh",
                  mb: "3.5vh",
                }}
              >
                {products ? (
                  currentData().map((item) => (
                    <ProductCard item={item} key={item.id} />
                  ))
                ) : (
                  <h2>Loading...</h2>
                )}
              </Box>
            </Grid>
            <Grid item md={12}>
              <Pagination
                count={count}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={(e, p) => setPage(p)}
              />
            </Grid>
          </Grid>
          <Grid item md={3} marginTop="20px">
            <Paper>
              <TextField
                id="input-with-icon-textfield"
                label="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  onChange={(e) => fetchByParams("type", e.target.value)}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="all"
                  />
                  <FormControlLabel
                    value="flowers"
                    control={<Radio />}
                    label="flowers"
                  />
                  <FormControlLabel
                    value="plants for garden"
                    control={<Radio />}
                    label="plants for garden"
                  />
                  <FormControlLabel
                    value="plants for home"
                    control={<Radio />}
                    label="plants for home"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;
