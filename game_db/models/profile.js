const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: String,
  image: String,
  user: String,
  collection: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserGame',
  }],
  archive: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UsersGame',
  }],
}, {timestamps:true});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
