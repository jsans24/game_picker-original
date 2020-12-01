const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: String,
  image: String,
  user: String,
  userCollection: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserGame',
  }],
}, {timestamps:true});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
