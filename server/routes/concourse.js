const express = require('express');
const router = express.Router();

const concourseService = require('../concourse/concourse-service');

router.get("/run-job/:branch_name/:job_name", async (req, res) => {
    const { branch_name, job_name } = req.params;

    const runJobResponse = concourseService.runJob(branch_name, job_name);

    if (runJobResponse) {
        res.status(200).send();
    } else {
        res.status(500).send();
    }
});

module.exports = router;



