import axios from "axios";

export const getNewsList = () => {
    return axios.get('https://hacker-news.firebaseio.com/v0/item/33832358.json?print=pretty')
        .then(response => (response.data));

}
