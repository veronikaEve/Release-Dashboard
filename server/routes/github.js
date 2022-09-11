const express = require('express');
const { Octokit } = require("octokit");

const router = express.Router();
const GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;

const octokit = new Octokit({
    auth: GITHUB_AUTH_TOKEN
})

const releaseBranchRegex = /^tv_release/g;

router.get("/release-branches", async (req, res) => {
    await octokit.request('GET /repos/{owner}/{repo}/branches', {
        owner: 'veronikaEve',
        repo: 'simple-mock-app',
    }).then(result => {
        const releaseBranches = result.data.filter(branch => branch.name.match(releaseBranchRegex))
        res.send(releaseBranches);
    }).catch(err => console.log("couldn't get branches", err))
});

module.exports = router;
