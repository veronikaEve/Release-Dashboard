require('dotenv').config();

const { Octokit } = require("octokit");

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});

async function run() {
    const { data: user } = await octokit.request(('GET /user'))

    console.log(`authenticated as ${user.login}`);
}

run();