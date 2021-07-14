import { SET_DATE } from "../actionTypes/scheduleScreenTypes";

const initialState = {
  tabItems: [
    { text: "1 подгруппа", img: "people-outline" },
    { text: "2 подгруппа", img: "briefcase-outline" },
  ],
  date: {
    day: "",
    other: "",
  },
};

export const scheduleScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return { ...state, date: action.date };
    default:
      return state;
  }
};
