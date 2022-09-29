const Tweet = require("../models");
const defaultTweets = require("./generate");

module.exports = {
    getTweets: (req, res) => {
        Tweet
            .find({})
            .then(result => res.json(result))
            .catch(err => res.status(404).json(err));
    },

    generateDefaultTweets: (req, res) => {
        try {
            defaultTweets.forEach(post => Tweet.insertMany(post));
            res.status(202).send("Successfully added default tweets to the database.");
        }

        catch (err) {
            console.log(err);
            res.status(404).json(err)
        }
    },

    deleteAllTweets: (req, res) => {
        Tweet
            .deleteMany({})
            .then(result => res.json(result))
            .catch(err => res.status(404).json(err));
    }
}
