require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoDBObject = require("./database/connection");

app.use('/concourse', require('./routes/concourse'));
app.use('/releases', require('./routes/mongoDB'));
app.use('/github', require('./routes/github'));

app.listen(port, () => {
    // perform a database connection when server starts
    mongoDBObject.connectToServer(function (err) {
        if (err) console.error(err);

    });

    console.log(`Server is running on port: ${port}`);
});