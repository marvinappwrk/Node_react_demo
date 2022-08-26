const express = require("express");
const routes = require('./app/routes/tutorial'); // import the routes
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const db = require("./app/models");

// PORT
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());

app.use('/api', routes); //to use the routes

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to marvin application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//database connection
db.mongoose
 .connect(db.url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
 .then(() => {
   console.log("Connected to the database!");
 })
 .catch(err => {
   console.log("Cannot  to the database!", err);
   process.exit();
 });
