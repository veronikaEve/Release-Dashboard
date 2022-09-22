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

const getPRDetails = async (branch_name) => {
    return octokit.request('GET /repos/{owner}/{repo}/pulls', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
    }).then(result => {
        const releasePR = result.data.find(PR => PR.head.ref.match(branch_name));
        return releasePR;
    }).catch(err => console.log("❗️ Something went wrong in getPRDetails: ", err));
}

const getCommitDetails = async (sha) => {
    return octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
        owner: repoDetails.owner,
        repo: repoDetails.repo,
        ref: sha,
    }).then(result => {
        return result.data
    }).catch(err => console.log("❗️ Something went wrong in getCommitDetails: ", err));
}

router.get("/PRs/:branch_name", async (req, res) => {
    let PRDetails;
    let latestCommitDetails;

    getPRDetails(req.params.branch_name)
        .then((response) => PRDetails = response)
        .then(() => {
            getCommitDetails(PRDetails.head.sha)
                .then((result) => latestCommitDetails = result)
                .then(() =>
                    res.send({ PRDetails, latestCommitDetails })) // the actual sending to client
                .catch((err) => console.log("Couldn't get commit details ", err))
        })
        .catch((err) => console.log("Couldn't get PR details ", err))
})

module.exports = router;


