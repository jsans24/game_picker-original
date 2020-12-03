// imports
const router = require("express").Router();
const ctrl = require("../controllers");


// /consoles
// routes
router.get("/", ctrl.consoles.index);
router.get("/:id", ctrl.consoles.show);
router.post("/", ctrl.consoles.create);
router.put("/:id", ctrl.consoles.update);
router.delete("/:id", ctrl.consoles.destroy);

// exports
module.exports = router;