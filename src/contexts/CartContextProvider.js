import React, { useContext, useReducer, createContext } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/functions";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart ",
        JSON.stringify({ products: [], totalPrice: 0 })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };
  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productsToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );
    if (productsToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.product = cart.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });

    cart.totalPrice = calcTotalPrice(cart.products);

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  function deleteCartproduct(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id === id);
      return newCart.length > 0 ? true : false;
    } else {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
  }

  function clearCart() {
    localStorage.clear();

    getCart();
  }

  let value = {
    cart: state.cart,

    getCart,
    addProductToCart,
    changeProductCount,
    deleteCartproduct,
    checkProductInCart,
    clearCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
