// routes/topics.routes.js
const router = require("express").Router();
const topicsController = require("../controllers/topics.controller");

router.post("/", topicsController.create);
router.put("/:id", topicsController.update);
router.delete("/:id", topicsController.delete);
router.post("/:id/vote", topicsController.vote);

module.exports = router;
