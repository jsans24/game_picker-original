// imports
const router = require("express").Router();
const ctrl = require("../controllers");


// /companies
// routes
router.get("/", ctrl.companies.index);
router.get("/:id", ctrl.companies.show);
router.post("/", ctrl.companies.create);
router.put("/:id", ctrl.companies.update);
router.delete("/:id", ctrl.companies.destroy);

// exports
module.exports = router;