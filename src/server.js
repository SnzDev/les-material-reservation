require('dotenv').config('../.env');

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./database/index');
const routes = require('./routes');
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/images', express.static(path.resolve(__dirname,"..","uploads")));
app.use(routes);

app.listen(process.env.PORT||3333);