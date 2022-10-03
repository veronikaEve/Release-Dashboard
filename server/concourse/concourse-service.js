const { execSync } = require('child_process');

const concourseService = {
    login() {
        console.log(`Logging into simple-mock-app...`)
        execSync(`fly7 -t simple-mock-app login -c http://localhost:8080 -u test -p test`)
    },

    unpausePipeline(branch) {
        console.log(`Unpausing pipeline release-pipeline-${branch}...`)
        execSync(`fly7 -t simple-mock-app unpause-pipeline -p release-pipeline-${branch}`)
    },

    triggerJob(branch, job) {
        console.log(`Running ${job} for release-pipeline-${branch}...`)
        execSync(`fly7 -t simple-mock-app trigger-job --job release-pipeline-${branch}/${job}`);
    },

    runJob(branch, job) {
        try {
            this.login();
            this.unpausePipeline(branch);
            this.triggerJob(branch, job);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

module.exports = concourseService