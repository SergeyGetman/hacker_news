
import {SET_IDS, SET_NEWS} from "./types";


export const setNews = (news) => ({
  type: SET_NEWS,
  payload: news
})

export const setIds = (ids) => ({
  type: SET_IDS,
  payload: ids
})
