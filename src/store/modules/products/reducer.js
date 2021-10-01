import { products } from "../..//../services/index";

const productsReducer = (state = products, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducer;
