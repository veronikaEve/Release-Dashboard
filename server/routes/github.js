const express = require('express');
const { Octokit } = require("octokit");

const router = express.Router();
const GITHUB_AUTH_TOKEN = process.env.GITHUB_AUTH_TOKEN;

const octokit = new Octokit({
    auth: GITHUB_AUTH_TOKEN
})

const releaseBranchRegex = /^tv_release/g;

const repoDetails = {
    owner: 'veronikaEve',
    repo: 'simple-mock-app',
}

router.get("/release-branches", async (req, res) => {
    await octokit.request('GET /repos/{owner}/{repo}/branches', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
    }).then(result => {
        const releaseBranches = result.data.filter(branch => branch.name.match(releaseBranchRegex));
        res.send(releaseBranches);
    }).catch(err => console.log("❗️ Something went wrong: ", err));
});

router.get("/release-prs", async (req, res) => {
    await octokit.request('GET /repos/{owner}/{repo}/pulls', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
    }).then(result => {
        const releasePRs = result.data.filter(PR => PR.head.ref.match(releaseBranchRegex));
        res.send(releasePRs);
    }).catch(err => console.log("❗️ Something went wrong: ", err));
})

router.get("/commit-details/:sha", async (req, res) => {
    await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
        ref: req.params.sha,
    }).then(result => {
        res.send(result);
    }).catch(err => console.log("❗️ Something went wrong: ", err));
})

module.exports = router;
