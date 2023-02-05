import { Button, CardMedia, Grid, Pape, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";

const CartItem = ({ item }) => {
  const { changeProductCount, deleteCartproduct } = useCart();

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
          }}
          src={item.item.img}
          alt={item.item.title}
        />
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="p" component="div">
          {item.item.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="p" component="div">
          {item.item.type}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="p" color="text.secondary">
          Price: {item.item.price}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="p" color="text.secondary">
          Quantity:{" "}
          <input
            type="number"
            min={1}
            max={100}
            value={item.count}
            onChange={(e) => {
              changeProductCount(e.target.value, item.item.id);
            }}
          ></input>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="p" color="text.secondary">
          SubPrice: {item.subPrice}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          onClick={() => deleteCartproduct(item.item.id)}
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default CartItem;
