import axios from "axios";

export const getIds = () => {
    return axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.data);
}

export const getNewsList = () => {
    const getRequest = id => axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(response => (response.data));

    return getIds().then(ids => {
        ids = ids.slice(0, 20);

        return Promise.all(ids.map(id => getRequest(id)))
            .catch(e => {
                console.error(e)
                // todo handle errors !!!!
            })
    })
}
