const router = require("express").Router();
const controller = require("../controllers");

router.get("/tweets", controller.getTweets);

router.post("/generate", controller.generateDefaultTweets);

router.delete("/tweets", controller.deleteAllTweets);

module.exports = router;
