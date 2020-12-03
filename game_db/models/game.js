const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  title: String,
  img: String,
  releaseDate: Date,
  metacritic: Number,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
  developer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
  platforms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Console',
  }],
}, {timestamps:true});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
