import { CHANGE_TABSTATE } from "../actionTypes/searchScreenTypes";

export const changeTabState = (id) => ({
  type: CHANGE_TABSTATE,
  tab: id,
});
