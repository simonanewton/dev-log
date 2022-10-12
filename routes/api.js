const router = require("express").Router();
const controller = require("../controllers");

router.get("/tweets", controller.getTweets);

router.get("/update", controller.updateTweets);

router.delete("/tweets", controller.deleteTweets);

module.exports = router;
