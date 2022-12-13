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

export const getNewData = () => {
   return  axios.get("https://run.mocky.io/v3/066f2a99-252b-4744-ae58-17382be9c462") //return Promice
       .then(res => JSON.parse("res.data")) // JSON PARSE response.data
       .then(   (r) =>  console.log("THIS IS NEWRES", r))
       .catch(e => console.error("ERRRROOOOR",e))
       .finally(r => console.log("finally",r))

}
getNewData();


const setApiNews = () => {

     const newData =  axios.get("https://run.mocky.io/v3/066f2a99-252b-4744-ae58-17382be9c462")

    const newData2 =  axios.get("https://run.mocky.io/v3/066f2a99-252b-4744-ae58-17382be9c462")

}




