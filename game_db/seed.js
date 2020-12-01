const db = require("./models");

const companyData = require("./Data/companyData")
const consoleData = require("./Data/consoleData")
const gameData = require("./Data/gameData")

// db.Company.deleteMany({}, (err, deletedCompanies) => {
//   db.Company.collection.insertMany(companyData, (err, seededCompanies) => {
//     if (err) console.log(err);

//     console.log(companyData.length, "companies created successfully");

//     process.exit();
//   });
// });

// db.Console.deleteMany({}, (err, deletedConsoles) => {
//   db.Console.collection.insertMany(consoleData, (err, seededConsoles) => {
//     if (err) console.log(err);

//     console.log(consoleData.length, "consoles created successfully");

//     process.exit();
//   });
// });

db.Game.deleteMany({}, (err, deletedGames) => {
  db.Game.collection.insertMany(gameData, (err, seededGames) => {
    if (err) Game.log(err);

    console.log(gameData.length, "Games created successfully");

    process.exit();
  });
});
