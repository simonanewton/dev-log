const router = require("express").Router();
const controller = require("../controllers");

router.get("/tweets", controller.getTweets);

router.get("/default", controller.getDefault);

router.post("/generate", controller.generateDefault);

module.exports = router;
