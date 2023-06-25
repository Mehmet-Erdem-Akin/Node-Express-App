const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
require("dotenv").config();

const memberRoute = require('./routes/members');
const reservationRoute = require('./routes/reservations');
const homeRoute = require('./routes/homes');
const hostRoute = require('./routes/hosts');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", memberRoute,reservationRoute,homeRoute,hostRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
