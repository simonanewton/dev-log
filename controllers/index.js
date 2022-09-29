const db = require("../models");
const defaultTweets = require("./generate");

module.exports = {
    getTweets: (req, res) => {
        db
            .find({})
            .then(result => {
                console.log(result);
                res.status(202).json(result);
            })
            .catch(err => res.status(422).json(err));
    },

    getDefault: (req, res) => {
        res.status(202).json(defaultTweets);
    },

    generateDefault: (req, res) => {
        defaultTweets.forEach(post => {
            console.log(post);
        })
            .then(() => {
                console.log("Sucess.");
                res.status(202);
            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err);
            })
    }
}
