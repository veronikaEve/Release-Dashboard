const express = require('express');
const { getReleaseBranches, getPRDetails, getCommitDetails } = require('../github/github-service');
const router = express.Router();

router.get("/PRs/:branch_name", (req, res) => {
    let PRDetails;
    let latestCommitDetails;

    getPRDetails(req.params.branch_name)
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


