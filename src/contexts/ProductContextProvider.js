import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API } from "../helpers/consts";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCT_DETAILS":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
}
const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();
  const location = useLocation(); // обращение к адресной строке

  const getProducts = async () => {
    try {
      let res = await axios(`${API}${window.location.search}`);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (obj) => {
    try {
      await axios.post(API, obj);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const getProductDetails = async (id) => {
    try {
      let res = await axios(`${API}/${id}`);
      dispatch({
        type: "GET_PRODUCT_DETAILS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const saveEditProduct = async (id, obj) => {
    try {
      await axios.patch(`${API}/${id}`, obj);
      getProducts();
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
    // getProducts();
  };

  let value = {
    products: state.products,
    productDetails: state.productDetails,
    getProducts,
    addProduct,
    deleteProduct,
    getProductDetails,
    saveEditProduct,
    fetchByParams,
  };
  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
