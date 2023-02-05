import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Avatar, Button, CardMedia, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";

const ProductCard = ({ item }, props) => {
  const { deleteProduct } = useProduct();
  const { addProductToCart, checkProductInCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { avatarUrl, title, subtitle, description, imgUrl } = props;
  return (
    <>
      <Card sx={{ minWidth: 27, margin: "20px" }}>
        <CardHeader
          avatar={<Avatar src={item.avatarUrl} />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={item.title}
          subheader={item.subtitle}
        />
        <CardMedia style={{ height: "210px" }} image={item.imgUrl} />

        <CardContent>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">{item.price}</Typography>
        </CardContent>
        <CardActions>
          <CardActions>
            <Button size="small" onClick={() => deleteProduct(item.id)}>
              <DeleteOutlineIcon color="success" />
            </Button>
            <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
              <AutoFixHighOutlinedIcon />
            </Button>
          </CardActions>
          <Button variant="outlined">BUY NOW</Button>
          <IconButton onClick={() => addProductToCart(item)}>
            <AddShoppingCartIcon
              color={checkProductInCart(item.id) ? "primary" : ""}
            />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductCard;
