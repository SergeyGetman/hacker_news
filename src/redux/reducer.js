import {SET_NEWS} from "./types";

const initialState = {
  news: []
};

export const arrayIdNumbers = [
  {
    name: "hacker news",
    rate: 12,
    nickname: "John",
    date: 2022
  },
  {
    name: "hacker news",
    rate: 7,
    nickname: "Seller",
    date: 2022
  },
  {
    name: "hacker news",
    rate: 5,
    nickname: "Don",
    date: 2022
  },
  {
    name: "hacker news",
    rate: 4,
    nickname: "Leo",
    date: 2022
  },
  {
    name: "hacker news",
    rate: 2,
    nickname: "Meet",
    date: 2022
  },
  {
    name: "hacker news",
    rate: 9,
    nickname: "Stefan",
    date: 2022
  },
  {
    name: "hacker news",
    rate: 3,
    nickname: "Like",
    date: 2022
  },
  {
    name: "hacker news",
    rate: 6,
    nickname: "Space",
    date: 2022
  },

]


const reducer = (state = initialState, action) => {

  switch (action.type) {

    case SET_NEWS : return {...state, news : action.payload }

    default:
      return state;
  }
};

export default reducer;
