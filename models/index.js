const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema ({
    profile_name: {
        type: String
    },
    profile_username: {
        type: String
    },
    profile_img: {
        type: String
    },
    profile_url: {
        type: String
    },
    tweet_id: {
        type: String
    },
    tweet_url: {
        type: String
    },
    timestamp: {
        type: String
    },
    text: {
        type: String
    },
    image: {
        type: String
    },
    stats: [{
        comments: {
            type: Number
        },
        retweets: {
            type: Number
        },
        likes: {
            type: Number
        }
    }],
    tags: {
        type: Array
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
