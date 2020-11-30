// imports
const router = require("express").Router();
const ctrl = require("../controllers");


// /games
// routes
router.get("/", ctrl.games.index);
router.get("/:id", ctrl.games.show);

// exports
module.exports = router;
