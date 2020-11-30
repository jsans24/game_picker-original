const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsoleSchema = new Schema({
  name: String,
  releaseDate: Date,
  lifetimeSales: Number,
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Console',
  },
  games: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
  }],
}, {timestamps:true});

const Console = mongoose.model("Console", ConsoleSchema);

module.exports = Console;
