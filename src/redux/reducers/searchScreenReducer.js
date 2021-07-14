import { CHANGE_TABSTATE } from "../actionTypes/searchScreenTypes";

const initialState = {
  tabItems: [
    { text: "Все" },
    { text: "Группы", img: "people-outline" },
    { text: "Преподаватели", img: "briefcase-outline" },
  ],
  searchData: [
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "181-Ч041", type: "group" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
    { title: "Тогузов С.А.", type: "teacher" },
  ],
  tabState: 0,
};

export const searchScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TABSTATE:
      return { ...state, tabState: action.tab };
    default:
      return state;
  }
};
