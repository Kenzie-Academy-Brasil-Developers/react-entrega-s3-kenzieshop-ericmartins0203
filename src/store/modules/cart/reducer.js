import { ADD_PRODUCT, DEL_PRODUCT } from "./actionsTypes";

const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { product } = action;
      return [...state, ...product];

    case DEL_PRODUCT:
      return action.delproduct;

    default:
      return state;
  }
};

export default cartReducer;
