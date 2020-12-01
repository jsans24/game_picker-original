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

const create = (req, res) => {
  db.Company.create(req.body)
    .then((savedCompany) => {
      res.json({ company: savedCompany});
    })
    .catch((err) => {
      console.log("Error in Company.create: ", err);
      res.json({ Error: "Unable to create Company" });
    });
};

const update = (req, res) => {
  db.Company.findByIdAndUpdate(req.params.id, req.body)
  .then((updatedCompany) => {
    res.json({ company: updatedCompany });
  })
  .catch((err) => {
    console.log("Error in Company.update: ", err);
    res.json({ Error: 'Unable to update Company' });
  })
};

const destroy = (req, res) => {
  db.Company.findByIdAndDelete(req.params.id)
  .then((deletedCompany) => {
    res.json({ company: deletedCompany });
  })
  .catch((err) => {
    console.log("Error in Company.destroy: ", err);
    res.json({ Error: 'Unable to delete Company' });
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};