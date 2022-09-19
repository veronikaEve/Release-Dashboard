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

let releasePRs;

const getReleasePRs = async () => {
    await octokit.request('GET /repos/{owner}/{repo}/pulls', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
    }).then(result => {
        releasePR = result.data.filter(PR => PR.head.ref.match(releaseBranchRegex));
    }).catch(err => console.log("❗️ Something went wrong: ", err));
}

const getReleasePR = async (releaseBranch) => {
    await octokit.request('GET /repos/{owner}/{repo}/pulls/{pull_number}', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
        pull_number: req.params.pull_number
    }).then(result => {
        releasePR = result.data.find(PR => PR.head.ref.match(releaseBranch));
    }).catch(err => console.log("❗️ Something went wrong: ", err));
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
    getReleasePRs().then(() =>
        res.send(releasePRs)
    )
})

router.get("/release-prs/:branch_name", async (req, res) => {
    await octokit.request('GET /repos/{owner}/{repo}/pulls', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
    }).then(result => {
        const releasePR = result.data.find(PR => PR.head.ref.match(req.params.branch_name));
        console.log(releasePR)
        res.send(releasePR);
    }).catch(err => console.log("❗️ Something went wrong: ", err));
})


router.get("/get-branch-data/:branch_name", async (req, res) => {
    await octokit.request('GET /repos/{owner}/{repo}/branches/{branch}', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
        branch: req.params.branch_name
    }).then(result => {
        res.send(result.data);
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


