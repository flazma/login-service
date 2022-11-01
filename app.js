"use strict";

//모듈
const express = require('express');
const app = express()
const home = require("./routes/home");

//앱 세팅
app.set("views","./views");
app.set("view engine","ejs");



app.use("/", home);

module.exports = app;

