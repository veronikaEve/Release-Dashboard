const { response } = require("express");
const { Octokit } = require("octokit");
const { GITHUB_AUTH_TOKEN, repoDetails } = require("./constants");

const releaseBranchRegex = /^tv_release/g;

const octokit = new Octokit({
    auth: GITHUB_AUTH_TOKEN
})

const githubService = {
    getPR: async (branch_name) => {
        try {
            const result = await octokit.request('GET /repos/{owner}/{repo}/pulls', {
                owner: repoDetails.owner,
                repo: repoDetails.repo,
            });
            const releasePR = result.data.find(PR => PR.head.ref.match(branch_name));
            return releasePR;
        } catch (err) {
            return console.error("❗️ Something went wrong in getPRDetails: ", err);
        }
    },

    getCommitDetails: async (sha) => {
        try {
            const result = await octokit.request('GET /repos/{owner}/{repo}/commits/{ref}', {
                owner: repoDetails.owner,
                repo: repoDetails.repo,
                ref: sha,
            });
            return result.data;
        } catch (err) {
            return console.error("❗️ Something went wrong in getCommitDetails: ", err);
        }
    },

    getPackageJsonContent: async (ref) => {
        try {
            const result = await octokit.request('GET /repos/{owner}/{repo}/contents/package.json?ref={ref}', {
                owner: repoDetails.owner,
                repo: repoDetails.repo,
                ref: ref
            });
            return Buffer.from(result.data.content, 'base64');
        } catch (err) {
            return console.error("❗️ Something went wrong in getPackageJsonContent:", err);
        }
    },

    getReleaseBranches: async () => {
        try {
            const result = await octokit.request('GET /repos/{owner}/{repo}/branches', {
                owner: repoDetails.owner,
                repo: repoDetails.repo,
            });
            const releaseBranches = result.data.filter(branch => branch.name.match(releaseBranchRegex));
            return releaseBranches;
        } catch (err) {
            return console.error("❗️ Something went wrong in getReleaseBranches:", err);
        }
    }
}

module.exports = githubService