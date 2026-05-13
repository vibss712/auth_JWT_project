const express = require('express');   //server crete 
require('dotenv').config();
const authRoutes = require("./routes/auth.routes");
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());              //middleware for cookie parser

app.use("/api/auth",authRoutes)     //prefix for all the api created by router 

module.exports = app;
