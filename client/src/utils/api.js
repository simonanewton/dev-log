import axios from "axios";

const API = {
    getTweets: () => {
        return axios.get("/api/tweets");
    },

    updateTweets: () => {
        return axios.post("/api/update");
    },

    deleteAllTweets: () => {
        return axios.delete("/api/tweets");
    }
}

export default API;
