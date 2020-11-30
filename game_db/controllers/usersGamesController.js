const db = require("../models");

const index = (req, res) => {
  db.UsersGame.find({})
    .then((foundUsersGames) => {
      res.json({ usersGames: foundUsersGames });
    })
    .catch((err) => {
      console.log("Error in usersGames.index: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

const show = (req, res) => {
  db.UsersGame.findById(req.params.id)
    .then((foundUsersGame) => {
      res.json({ usersGame: foundUsersGame });
    })
    .catch((err) => {
      console.log("Error in usersGame.show: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

const create = (req, res) => {
  db.UsersGame.create(req.body)
    .then((savedUsersGame) => {
      res.json({ usersGame: savedUsersGame});
    })
    .catch((err) => {
      console.log("Error in usersGame.create: ", err);
      res.json({ Error: "Unable to create usersGame" });
    });
};

const update = (req, res) => {
  db.UsersGame.findByIdAndUpdate(req.params.id, req.body)
  .then((updatedUsersGame) => {
    res.json({ usersGame: updatedUsersGame });
  })
  .catch((err) => {
    console.log("Error in usersGame.update: ", err);
    res.json({ Error: 'Unable to update usersGame' });
  })
};

const destroy = (req, res) => {
  db.UsersGame.findByIdAndDelete(req.params.id)
  .then((deletedUsersGame) => {
    res.json({ usersGame: deletedUsersGame });
  })
  .catch((err) => {
    console.log("Error in usersGame.destroy: ", err);
    res.json({ Error: 'Unable to delete usersGame' });
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};