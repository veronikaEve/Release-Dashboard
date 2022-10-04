const { Octokit } = require("octokit");
const { GITHUB_AUTH_TOKEN, repoDetails } = require("./constants");

const releaseBranchRegex = /^tv_release/g;

const octokit = new Octokit({
    auth: GITHUB_AUTH_TOKEN
})

const githubService = {
    getPRDetails: (branch_name) => {
        return octokit.request('GET /repos/{owner}/{repo}/pulls', {
            owner: repoDetails.owner,
            repo: repoDetails.repo,
        }).then(result => {
            const releasePR = result.data.find(PR => PR.head.ref.match(branch_name));
            return releasePR;
        }).catch(err => console.error("❗️ Something went wrong in getPRDetails: ", err));
    },

    getCommitDetails: (sha) => {
        return octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
            owner: repoDetails.owner,
            repo: repoDetails.repo,
            ref: sha,
        }).then(result => {
            return result.data
        }).catch(err => console.error("❗️ Something went wrong in getCommitDetails: ", err));
    },

    getReleaseBranches: () => {
        return octokit.request('GET /repos/{owner}/{repo}/branches', {
            owner: repoDetails.owner,
            repo: repoDetails.repo,
        }).then(result => {
            const releaseBranches = result.data.filter(branch => branch.name.match(releaseBranchRegex))
            return releaseBranches;
        }).catch(err => console.error("❗️ Something went wrong in getReleaseBranches:", err))
    }
}

module.exports = githubService