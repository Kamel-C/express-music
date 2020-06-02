const port = 8080;
const hostname = "localhost";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const MusicRouter = require("./routes/MusicRoute");
const dbConnection = require("./config/DBConnection");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbConnection();

app.use("/api/music", MusicRouter);

app.listen(port, hostname, () =>
  console.log(`Server start on port ${port}!!!`)
);
