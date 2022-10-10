import axios from "axios";

const API = {
    getTweets: () => {
        return axios.get("/api/tweets");
    }
}

export default API;
