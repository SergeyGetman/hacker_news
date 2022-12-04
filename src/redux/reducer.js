import {SET_IDS, SET_NEWS} from "./types";

const initialState = {
  news: []
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_NEWS :
      return {...state, news : action.payload }

    case SET_IDS:
      return {...state, ids : action.payload }

    default:
      return state;
  }
};

export default reducer;
