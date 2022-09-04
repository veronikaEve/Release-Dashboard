const express = require('express');
const router = express.Router();

const dbo = require("../database/connection");

router.get("/", async (req, res) => {
    let db_connect = dbo.getDb('release-history');
    db_connect
        .collection('eu-xtv-release-history')
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

module.exports = router;
