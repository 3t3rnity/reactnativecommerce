import { CHANGE_AUTH } from "../actionTypes/appTypes";

const initialState = {
  auth: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, auth: !state.auth };
    default:
      return state;
  }
};
