const express = require('express');
const { getReleaseDetails, getReleaseBranchNames } = require('../github/github-response-transformer');
const { getPR, getCommitDetails, getReleaseBranches, getPackageJsonContent } = require('../github/github-service');
const router = express.Router();

router.get("/PRs/:branch_name", async (req, res) => {
    const branch = req.params.branch_name;

    const PRDetails = await getPR(branch);
    const latestCommitDetails = PRDetails && await getCommitDetails(PRDetails.head.sha);
    const packageJsonDetails = await getPackageJsonContent(branch);

    const releaseDetails = getReleaseDetails(PRDetails, latestCommitDetails, packageJsonDetails);

    res.send(releaseDetails);
})

router.get("/release-branches", async (req, res) => {

    const releaseBranches = await getReleaseBranches();
    const releaseBranchNames = getReleaseBranchNames(releaseBranches);
    res.send(releaseBranchNames);
});

module.exports = router;


