const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersGameSchema = new Schema({
  profile: {
    type: String,
    required: true,
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  },
  ownedPlatforms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Console',
    required: true,
  }],
  archived: Boolean,
}, {timestamps:true});

const UsersGame = mongoose.model("UsersGame", UsersGameSchema);

module.exports = UsersGame;
