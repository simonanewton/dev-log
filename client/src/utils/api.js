import axios from "axios";

const API = {
    getTweets: () => {
        return axios.get("/api/tweets");
    },

    generateDefaultTweets: () => {
        return axios.post("/api/generate");
    }
}

export default API;
