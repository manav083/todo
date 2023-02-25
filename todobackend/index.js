require("./db");
const express = require("express");
const router = require("./router/router");
const app = express();
const cors = require("cors");
const parser = require("body-parser");

app.use(cors());

// const Manoj = (req,res) =>{
//     res.send('Manoj Hu Me, Manojjj!!!!!!!')
// }

app.use(parser.json());
app.use('/', router);

// app.get("/", Manoj);

module.exports = app;
