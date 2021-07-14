import { SET_DATE } from "../actionTypes/scheduleScreenTypes";
import moment from "moment";
import "moment/locale/ru";

export const setDate = (newDate) => {
  const dateHandler = moment(newDate);
  let day = dateHandler.format("dddd");
  day = day[0].toUpperCase() + day.substring(1);
  return {
    type: SET_DATE,
    date: {
      day: day,
      other: dateHandler.format("D MMM"),
    },
  };
};
