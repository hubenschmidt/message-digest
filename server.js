//Dependencies
const app = require('express');
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = process.env.PORT || 8080;
require('dotenv').config({ path: './.env' });

//config bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.use(routes);

app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

//start server
app.listen(PORT, () =>
    console.log(console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`))
);

