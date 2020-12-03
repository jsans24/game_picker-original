// imports
const router = require("express").Router();
const ctrl = require("../controllers");


// /usersGames
// routes
router.get("/", ctrl.usersGames.index);
router.get("/:id", ctrl.usersGames.show);
router.get("/find/:game/:profile", ctrl.usersGames.find);
router.get("/findcollection/:profile", ctrl.usersGames.findCollection);
router.post("/", ctrl.usersGames.create);
router.put("/:id", ctrl.usersGames.update);
router.delete("/:id", ctrl.usersGames.destroy);

// exports
module.exports = router;