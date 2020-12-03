const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: String,
  founded: Date,
  countryOfOrigin: String,
  ceo: String,
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
  },
}, {timestamps:true});

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
