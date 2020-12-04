const express = require('express');
const app = express();
const dotenv = require('dotenv');
const expressip = require('express-ip');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const FactionRoute = require('./routes/faction');

dotenv.config();
app.use(expressip().getIpInfoMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

//Connect to DB
mongoose.connect( process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected to DataBase !')
);

app.use('/faction/minage', FactionRoute);

app.listen(8080, () => {
    console.log(`I am starting on the PORT: 8080`)
})