const db = require("../models");

const index = (req, res) => {
  db.Game.find({})
    .then((foundGames) => {
      res.json({ games: foundGames });
    })
    .catch((err) => {
      console.log("Error in games.index: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

const show = (req, res) => {
  db.Game.findById(req.params.id)
    .then((foundGame) => {
      res.json({ game: foundGame });
    })
    .catch((err) => {
      console.log("Error in game.show: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

module.exports = {
  index,
  show,
};