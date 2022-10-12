import axios from "axios";

const API = {
    getTweets: async () => {
        return await axios.get("/api/tweets");
    },

    updateTweets: async () => {
        return await axios.post("/api/update");
    }
}

export default API;
