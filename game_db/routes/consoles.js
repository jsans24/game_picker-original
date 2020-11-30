// imports
const router = require("express").Router();
const ctrl = require("../controllers");


// /consoles
// routes
router.get("/", ctrl.consoles.index);
router.get("/:id", ctrl.consoles.show);

// exports
module.exports = router;