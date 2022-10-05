import axios from "axios";

const API = {
    getTweets: () => {
        return axios.get("/api/tweets");
    },

    generateDefaultTweets: () => {
        return axios.post("/api/default");
    }
}

export default API;
