import axios from "axios";

const API = {
    // getTweets: () => {
    //     return axios.get("/api/tweets");
    // },

    // updateTweets: () => {
    //     return axios.get("/api/update");
    // },

    getNetlify: () => {
        return axios.get("/.netlify/functions/getTweets");
    }
}

export default API;
