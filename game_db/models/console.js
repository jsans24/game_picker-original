const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsoleSchema = new Schema({
  name: String,
  releaseDate: Date,
  lifetimeSales: Number,
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
}, {timestamps:true});

const Console = mongoose.model("Console", ConsoleSchema);

module.exports = Console;
