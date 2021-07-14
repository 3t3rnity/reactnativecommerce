import {
  FETCH_GOODS,
  FETCH_CATALOG_GOODS,
  EXTENDED_STATE,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_CATEGORY,
  CLEAR_CART,
} from "../actionTypes/mainTypes";
import { commerce } from "../../ecommerce";

export const fetchGoods = (type) => {
  return async (dispatch) => {
    const res = await commerce.products.list(type ? type : null);
    dispatch({
      type: FETCH_GOODS,
      payload: res.data,
    });
  };
};

export const fetchCatalogGoods = (type) => {
  return async (dispatch) => {
    const res = await commerce.products.list(type ? type : null);
    dispatch({
      type: FETCH_CATALOG_GOODS,
      payload: res.data,
    });
  };
};

export const addToCart = (fullItem, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: {
      quantity,
      item: fullItem,
    },
  };
};

export const deleteFromCart = (id) => {
  return {
    type: DELETE_FROM_CART,
    id,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const changeCategory = (category) => ({
  type: CHANGE_CATEGORY,
  category,
});

export const changeExtendedState = () => ({
  type: EXTENDED_STATE,
});
