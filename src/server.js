// const express = require('express');
import express from 'express';
import bodyParser from 'body-parser';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './routes/web';

require('dotenv').config();

let app = express();

// set up view engine
configViewEngine(app);

//init web router
initWebRoute(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const port = process.env.PORT || 5000;

// connect database
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
