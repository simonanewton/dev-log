import axios from "axios";

const API = {
    getTweets: () => {
        return axios.get("/api/tweets");
    },

    getListTweets: () => {
        return axios.get("/api/list");
    },

    updateTweets: () => {
        return axios.get("/api/update");
    }
}

export default API;
