const express = require("express");
const app = express();
var cors = require("cors");
require("./database/index");
const routes = require("./routes");

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT||3333);