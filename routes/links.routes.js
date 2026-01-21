// routes/links.routes.js
const router = require("express").Router();
const linksController = require("../controllers/links.controller");

router.post("/", linksController.create);
router.put("/:id", linksController.update);
router.delete("/:id", linksController.delete);
router.post("/:id/vote", linksController.vote);

module.exports = router;
