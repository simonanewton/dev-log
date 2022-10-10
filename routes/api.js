const router = require("express").Router();
const controller = require("../controllers");

router.get("/tweets", controller.getTweets);

router.get("/timeline", controller.getTimeline);

router.get("/list", controller.getListTweets);

router.post("/update", controller.updateTweets);

router.delete("/tweets", controller.deleteAllTweets);

module.exports = router;
