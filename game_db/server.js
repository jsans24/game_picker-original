// imports
const express = require("express"); 
const cors = require("cors");
const routes = require("./routes");

const port = process.env.PORT || 4000;
const app = express();

const corsOption = {
  origin: "http://localhost:3000"
}

// middleware - CORS
app.use(cors(corsOption));

// middleware - JSON parsing
app.use(express.json());

// API routes
app.use("/companies", routes.companies);
app.use("/consoles", routes.consoles);
app.use("/games", routes.games);
app.use("/profiles", routes.profiles);
app.use("/usersgames", routes.usersGames);

// connection
app.listen(port, () => console.log(`Server running on Port: ${port}`));
