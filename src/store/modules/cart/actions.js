import { ADD_PRODUCT, DEL_PRODUCT } from "./actionsTypes";

export const addToCart = (product) => ({ type: ADD_PRODUCT, product });

export const removeCart = (delproduct) => ({ type: DEL_PRODUCT, delproduct });
