const express = require('express');
const router = express.Router();
const { execSync } = require('child_process');

router.get("/release/:branch_name", async (req, res) => {
    execSync(`zx ./concourse/trigger-release.mjs ${req.params.branch_name}`);
});

router.get("/rollback/:branch_name", async (req, res) => {
    execSync(`zx ./concourse/trigger-rollback.mjs ${req.params.branch_name}`);
});

module.exports = router;



