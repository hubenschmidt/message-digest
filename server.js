//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');
const PORT = process.env.POR || 8080;
require('dotenv').config({ path: './.env' });

//set mongoose to levergae built in JavaScript ES6 Promises
mongoose.Promise = Promise;

const app = express();

//config bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use(routes);

//express middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

//connect to the Mongo DB
if (process.env.NODE_ENV === 'production'){
    mongoose.connect(process.env.PRODUCTION_DB_URL);
} else {
    mongoose.connect(process.env.PROVISIONAL_DB, {
        useNewUrlParser: true })
        .then(()=> console.log('MongoDB successfully connected'))
        .catch(err => console.log(err))
};

//start server
app.listen(PORT, () =>
    console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`)
);

console.log(process.env.NODE_ENV)