const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersGameSchema = new Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  },
  ownedPlatforms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Console',
  }],
  archived: Boolean,
}, {timestamps:true});

const UsersGame = mongoose.model("UsersGame", UsersGameSchema);

module.exports = UsersGame;
