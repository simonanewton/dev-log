const router = require("express").Router();
const controller = require("../controllers");

router.get("/tweets", controller.getTweets);

router.get("/timeline", controller.getTimeline);

router.get("/tweet/:id", controller.getTweetData);

router.post("/update", controller.updateTweets);

router.post("/default", controller.generateDefaultTweets);

router.delete("/tweets", controller.deleteAllTweets);

module.exports = router;
