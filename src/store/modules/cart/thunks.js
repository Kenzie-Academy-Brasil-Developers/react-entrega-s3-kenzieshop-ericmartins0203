import { products } from "../../../services/index";
import { addToCart, removeCart } from "./actions";

export const addToCartThunk = (productName) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  const product = products.filter((item) => item.name === productName);
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addToCart(product));
};

export const removeCartThunk = (productName) => (dispatch, getstate) => {
  const { cart } = getstate();
  console.log(cart);
  // const list = JSON.parse(localStorage.getItem("cart")) || [];
  const product = cart.filter((item) => item.name !== productName);
  localStorage.setItem("cart", JSON.stringify(product));
  dispatch(removeCart(product));
};
