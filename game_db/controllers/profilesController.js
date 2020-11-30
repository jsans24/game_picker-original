const db = require("../models");

const index = (req, res) => {
  db.Profile.find({})
    .then((foundProfiles) => {
      res.json({ profiles: foundProfiles });
    })
    .catch((err) => {
      console.log("Error in profiles.index: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

const show = (req, res) => {
  db.Profile.findById(req.params.id)
    .then((foundProfile) => {
      res.json({ profile: foundProfile });
    })
    .catch((err) => {
      console.log("Error in profile.show: ", err);
      res.json({ Error: "Unable to retrieve your data" });
    });
};

const create = (req, res) => {
  db.Profile.create(req.body)
    .then((savedProfile) => {
      res.json({ profile: savedProfile});
    })
    .catch((err) => {
      console.log("Error in profile.create: ", err);
      res.json({ Error: "Unable to create profile" });
    });
};

const update = (req, res) => {
  db.Profile.findByIdAndUpdate(req.params.id, req.body)
  .then((updatedProfile) => {
    res.json({ profile: updatedProfile });
  })
  .catch((err) => {
    console.log("Error in profile.update: ", err);
    res.json({ Error: 'Unable to update Profile' });
  })
};

const destroy = (req, res) => {
  db.Profile.findByIdAndDelete(req.params.id)
  .then((deletedProfile) => {
    res.json({ profile: deletedProfile });
  })
  .catch((err) => {
    console.log("Error in profile.destroy: ", err);
    res.json({ Error: 'Unable to delete profile' });
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};