const req = require("express/lib/request");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser =require ('body-parser');
const connectDB = require("./config/db");

const app = express();

//ConnectDB
connectDB();

// Body-Parser MiddleWare
app.use(bodyParser.json());

app.get('/',(req,res) => res.send('Hello world!'));

const port = process.env.PORT || 5000 ;

app.listen(port,() => console.log (`Server running on port ${port}`));