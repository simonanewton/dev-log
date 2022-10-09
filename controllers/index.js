const dotenv = require("dotenv");
const axios = require("axios").default;
const Tweet = require("../models");
const defaultTweets = require("./generate");

dotenv.config();

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
                url: "https://api.twitter.com/2/users/1518710755855638528/tweets?expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=attachments,created_at,entities,public_metrics&user.fields=profile_image_url,url,username,verified&media.fields=url,alt_text",
                headers: {
                    "Authorization": process.env.BEARER_TOKEN
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
                url: `https://api.twitter.com/2/tweets/${req.params.id}?expansions=author_id,referenced_tweets.id,attachments.media_keys&media.fields=url,alt_text&user.fields=profile_image_url,url,username,verified&tweet.fields=attachments,created_at,entities,public_metrics`,
                headers: {
                    "Authorization": process.env.BEARER_TOKEN
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
                url: `https://api.twitter.com/2/users/1518710755855638528/tweets?expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=attachments,created_at,entities,public_metrics&user.fields=profile_image_url,url,username,verified&media.fields=url,alt_text`,
                headers: {
                    "Authorization": process.env.BEARER_TOKEN
                }
            })
                .then(result => {
                    const tweets = result.data.data;
                    const user = result.data.includes.users[0];
                    tweets.forEach((tweet) => {
                        const post = {
                            profile_name: user.name,
                            profile_username: user.username,
                            profile_img: user.profile_image_url,
                            profile_url: `https://twitter.com/${user.username}`,
                            tweet_id: tweet.id,
                            url: `https://twitter.com/simonanewtondev/status/${tweet.id}`,
                            timestamp: tweet.created_at,
                            text: tweet.text,
                            image: "",
                            stats: [
                                { comments: tweet.public_metrics.reply_count },
                                { retweets: tweet.public_metrics.retweet_count },
                                { likes: tweet.public_metrics.like_count }
                            ],
                            tags: tweet.entities.hashtags.map(hashtag => hashtag.tag)
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
    },

    getListTweets: (req, res) => {
        try {
            axios({
                method: "GET",
                url: "https://api.twitter.com/2/lists/1568647817408778240/tweets?expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=attachments,created_at,entities,public_metrics&user.fields=profile_image_url,url,username,verified&media.fields=url,alt_text",
                headers: {
                    "Authorization": process.env.BEARER_TOKEN
                }
            })
                .then(result => res.json(result.data))
                .catch(err => console.log(err));
        }

        catch (err) {
            console.log(err);
            res.status(404).json(err);
        }
    },

    updateListTweets: (req, res) => {
        try {
            axios({
                method: "GET",
                url: "https://api.twitter.com/2/lists/1568647817408778240/tweets?expansions=author_id,referenced_tweets.id,attachments.media_keys&tweet.fields=attachments,created_at,entities,public_metrics&user.fields=profile_image_url,url,username,verified&media.fields=url,alt_text",
                headers: {
                    "Authorization": process.env.BEARER_TOKEN
                }
            })
                .then(result => {
                    const usersSorted = result.data.includes.users;
                    const tweets = result.data.data;
                    tweets.forEach((tweet) => {
                        const post = {
                            profile_name: user.name,
                            profile_username: user.username,
                            profile_img: user.profile_image_url,
                            profile_url: `https://twitter.com/${user.username}`,
                            tweet_id: tweet.id,
                            url: `https://twitter.com/simonanewtondev/status/${tweet.id}`,
                            timestamp: tweet.created_at,
                            text: tweet.text,
                            image: "",
                            stats: [
                                { comments: tweet.public_metrics.reply_count },
                                { retweets: tweet.public_metrics.retweet_count },
                                { likes: tweet.public_metrics.like_count }
                            ],
                            tags: tweet.entities.hashtags.map(hashtag => hashtag.tag)
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
    }
}
