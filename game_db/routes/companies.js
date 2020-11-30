// imports
const router = require("express").Router();
const ctrl = require("../controllers");


// /companies
// routes
router.get("/", ctrl.companies.index);
router.get("/:id", ctrl.companies.show);

// exports
module.exports = router;