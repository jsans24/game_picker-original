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
    .populate("publisher")
    .populate("developer")
    .populate("platforms")
    .exec((err, foundGame) => {
      if(err) console.log(err);

      res.json({ game: foundGame })
    })
};

const create = (req, res) => {
  db.Game.create(req.body)
    .then((savedGame) => {
      res.json({ game: savedGame});
    })
    .catch((err) => {
      console.log("Error in Game.create: ", err);
      res.json({ Error: "Unable to create Game" });
    });
};

const update = (req, res) => {
  db.Game.findByIdAndUpdate(req.params.id, req.body)
  .then((updatedGame) => {
    res.json({ game: updatedGame });
  })
  .catch((err) => {
    console.log("Error in Game.update: ", err);
    res.json({ Error: 'Unable to update Game' });
  })
};

const destroy = (req, res) => {
  db.Game.findByIdAndDelete(req.params.id)
  .then((deletedGame) => {
    res.json({ game: deletedGame });
  })
  .catch((err) => {
    console.log("Error in Game.destroy: ", err);
    res.json({ Error: 'Unable to delete Game' });
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};