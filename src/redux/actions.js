
import {SET_IDS, SET_NEWS, GET_DATA} from "./types";


export const setNews = (news) => ({
  type: SET_NEWS,
  payload: news
})

export const getData = (data) => ({
  type: GET_DATA,
  payload: data
})
