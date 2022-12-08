import {GET_DATA, SET_IDS, SET_NEWS} from "./types";

const initialState = {
  news: []
};

export const MOCK_DATA = {
  number: "Q000000034",
  customer: 1648,
  date: "06.12.2022",
  mockdataTitle : ["Item", "Quanty", "Utin Prise"]
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_NEWS :
      return {...state, news : action.payload }

    case SET_IDS:
      return {...state, ids : action.payload }

    case GET_DATA:
      return  {...state, data: action.payload}

    default:
      return state;
  }
};

export default reducer;
