require('dotenv').config('../.env');

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
require("./database/index");
const routes = require("./routes");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT||3333);