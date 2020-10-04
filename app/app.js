//Usings
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
//Start app
const app = express();

app.use(bodyParser.json());
//Import Routes
const postRoute = require('./Routes/MonsterController');
app.use('/monster', postRoute);
app.use(cors);

//Base Route
app.get('/', (req, res, next) => {
    res.send('TEST')
});

//Db Connection
mongoose.connect(
    process.env.DB_CONNECTION, 
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    }, 
    () => { console.log('connected to db') }
);

app.listen(5000);