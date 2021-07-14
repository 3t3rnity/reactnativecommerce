import {
  FETCH_GOODS,
  FETCH_CATALOG_GOODS,
  EXTENDED_STATE,
  ADD_TO_CART,
  DELETE_FROM_CART,
  CHANGE_CATEGORY,
  CLEAR_CART,
} from "../actionTypes/mainTypes";

const initialState = {
  user: {
    name: "Максим",
    lastName: "Прохоров",
    fatherName: "Андреевич",
    telephone: "88005553535",
    email: "mail@mail.ru",
    address: "Cheboksary",
    index: "000000",
  },
  category: "all",
  goods: [],
  catalogGoods: [],
  cart: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOODS:
      return { ...state, goods: action.payload };
    case FETCH_CATALOG_GOODS:
      return { ...state, catalogGoods: action.payload };
    case CHANGE_CATEGORY:
      return { ...state, category: action.category };
    case EXTENDED_STATE:
      return { ...state, extended: !state.extended };
    case ADD_TO_CART:
      state.cart.push(action.payload);
      return { ...state };
    case CLEAR_CART:
      return { ...state, cart: [] };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((el) => el.item.id !== action.id),
      };
    default:
      return { ...state };
  }
};
