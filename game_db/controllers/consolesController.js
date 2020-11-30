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

module.exports = {
  index,
  show,
};