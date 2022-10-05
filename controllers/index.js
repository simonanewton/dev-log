const axios = require("axios").default;
const Tweet = require("../models");
const defaultTweets = require("./generate");

module.exports = {
    getTweets: (req, res) => {
        Tweet
            .find({})
            .then(result => res.json(result))
            .catch(err => res.status(404).json(err));
    },

    getTimeline: (req, res) => {
        try {
            axios({
                method: "GET",
                url: "https://api.twitter.com/2/users/1518710755855638528/tweets?expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=attachments,created_at,entities&user.fields=profile_image_url,url,username,verified&media.fields=url,alt_text",
                headers: {
                    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAIGhgwEAAAAAifrP8YmNrKcflm6H2eIEQSFy3Ic%3DUt1xUJYU06KD6EkNN3x8yn5u27CutOCxpss6y56l3FLYoikFKi"
                }
            })
                .then(result => res.json(result.data.data))
                .catch(err => console.log(err));
        }

        catch (err) {
            console.log(err);
            res.status(404).json(err);
        }
    },

    getTweetData: (req, res) => {
        try {
            axios({
                method: "GET",
                url: `https://api.twitter.com/2/tweets/${req.params.id}?expansions=author_id,referenced_tweets.id,attachments.media_keys&media.fields=url,alt_text&user.fields=profile_image_url,url,username,verified&tweet.fields=attachments,created_at,entities`,
                headers: {
                    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAIGhgwEAAAAAifrP8YmNrKcflm6H2eIEQSFy3Ic%3DUt1xUJYU06KD6EkNN3x8yn5u27CutOCxpss6y56l3FLYoikFKi"
                }
            })
                .then(result => res.json(result.data.data))
                .catch(err => console.log(err));
        }

        catch (err) {
            console.log(err);
            res.status(404).json(err);
        }
    },

    updateTweets: (req, res) => {
        try {
            axios({
                method: "GET",
                url: `https://api.twitter.com/2/users/1518710755855638528/tweets?expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=attachments,created_at,entities&user.fields=profile_image_url,url,username,verified&media.fields=url,alt_text`,
                headers: {
                    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAIGhgwEAAAAAifrP8YmNrKcflm6H2eIEQSFy3Ic%3DUt1xUJYU06KD6EkNN3x8yn5u27CutOCxpss6y56l3FLYoikFKi"
                }
            })
                .then(result => {
                    const tweets = result.data.data;
                    const user = result.data.includes.users[0];
                    tweets.forEach(async (tweet) => {
                        const post = {
                            profile_name: user.name,
                            profile_username: user.username,
                            profile_img: user.profile_image_url,
                            profile_url: user.url,
                            tweet_id: tweet.id,
                            url: `https://twitter.com/simonanewtondev/status/${tweet.id}`,
                            timestamp: tweet.created_at,
                            text: tweet.text,
                            image: "",
                            stats: [
                                { comments: 0 },
                                { retweets: 1 },
                                { likes: 1 }
                            ],
                            tags: ["MongoDB", "API", "JS"]
                        };
                        Tweet.updateMany({ tweet_id: post.tweet_id }, { $set: post }, { upsert: true }).catch(err => console.log(err));
                    });
                    res.status(202).send("Successfully added Timeline to the database.");
                })
                .catch(err => console.log(err));
        }

        catch (err) {
            console.log(err);
            res.status(404).json(err);
        }
    },

    generateDefaultTweets: (req, res) => {
        try {
            defaultTweets.forEach(post => Tweet.insertMany(post));
            res.status(202).send("Successfully added default tweets to the database.");
        }

        catch (err) {
            console.log(err);
            res.status(404).json(err);
        }
    },

    deleteAllTweets: (req, res) => {
        Tweet
            .deleteMany({})
            .then(result => res.json(result))
            .catch(err => res.status(404).json(err));
    }
}
