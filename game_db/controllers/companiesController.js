const db = require("../models");

const index = (req, res) => {
  db.Company.find({})
    .then((foundCompanies) => {
      res.json({ companies: foundCompanies });
    })
    .catch((err) => {
      console.log("Error in companies.index: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

const show = (req, res) => {
  db.Company.findById(req.params.id)
    .then((foundCompany) => {
      res.json({ company: foundCompany });
    })
    .catch((err) => {
      console.log("Error in company.show: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

module.exports = {
  index,
  show,
};