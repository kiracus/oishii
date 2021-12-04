const express = require('express');
const app = express();


// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

// bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//add session here
// const session = require('express-session')
// app.use(session({
//     secret: 'keyboard cat',
//     cookie: {}
// }));

//MongoDB

const URL = 'mongodb://localhost:27017/Oishii';
// const URL = "mongodb+srv://oishii:oishii@cluster0.9hn8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const mongoose = require('mongoose');
mongoose.connect(URL);




console.log("in server");

// require('./service/test')(app);
require('./service/spoon')(app);
// require("./db/User/user-controller")(app);

app.listen(process.env.PORT || 4000);