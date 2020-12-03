const db = require("../models");

const index = (req, res) => {
  db.Console.find({})
    .then((foundConsoles) => {
      res.json({ consoles: foundConsoles });
    })
    .catch((err) => {
      console.log("Error in consoles.index: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

const show = (req, res) => {
  db.Console.findById(req.params.id)
    .then((foundConsole) => {
      res.json({ console: foundConsole });
    })
    .catch((err) => {
      console.log("Error in console.show: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

const create = (req, res) => {
  db.Console.create(req.body)
    .then((savedConsole) => {
      res.json({ console: savedConsole});
    })
    .catch((err) => {
      console.log("Error in Console.create: ", err);
      res.json({ Error: "Unable to create Console" });
    });
};

const update = (req, res) => {
  db.Console.findByIdAndUpdate(req.params.id, req.body)
  .then((updatedConsole) => {
    res.json({ console: updatedConsole });
  })
  .catch((err) => {
    console.log("Error in Console.update: ", err);
    res.json({ Error: 'Unable to update Console' });
  })
};

const destroy = (req, res) => {
  db.Console.findByIdAndDelete(req.params.id)
  .then((deletedConsole) => {
    res.json({ console: deletedConsole });
  })
  .catch((err) => {
    console.log("Error in Console.destroy: ", err);
    res.json({ Error: 'Unable to delete Console' });
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};