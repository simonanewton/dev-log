import axios from "axios";

const API = {
    getTweets: () => {
        return axios.get("/api/tweets");
    },

    getDefault: () => {
        return axios.get("/api/default");
    },

    generateDefault: () => {
        return axios.post("/api/generate");
    }
}

export default API;
