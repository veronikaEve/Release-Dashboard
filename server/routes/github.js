const express = require('express');
const { getPR, getCommitDetails } = require('../github/github-service');
const router = express.Router();

router.get("/PRs/:branch_name", (req, res) => {
    const branch = req.params.branch_name

    let PRDetails;
    let latestCommitDetails;

    getPR(branch)
        .then((response) => PRDetails = response)
        .then(() => {
            getCommitDetails(PRDetails.head.sha)
                .then((result) => latestCommitDetails = result)
                .then(() =>
                    res.send({ PRDetails, latestCommitDetails }))
                .catch((err) => console.error("Couldn't get commit details ", err))
        })
        .catch((err) => console.error("Couldn't get PR details ", err))
})

router.get("/release-branches", (req, res) => {

    getReleaseBranches()
        .then((response) => res.send(response))
        .catch((err) => console.error("Couldn't get release branches ", err))
});

module.exports = router;


