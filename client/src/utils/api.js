import axios from "axios";

const API = {
    getTweets: () => {
        return axios.get("/api/tweets");
    },

    updateTweets: async () => {
        return axios.get("/api/update");
    }
}

export default API;
