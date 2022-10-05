const githubResponseTranformer = {
    getReleaseDetails: (PRDetails, commitDetails, packageJsonDetails) => {
        return {
            branchName: PRDetails?.head.ref || "",
            appVersion: packageJsonDetails?.version || "",
            latestCommitHash: commitDetails?.sha.substring(0, 6) || "",
            openedBy: PRDetails?.user.login || "",
            lastUpdatedBy: commitDetails?.author.login || "",
            PRUrl: PRDetails?.html_url || ""
        }
    },

    getReleaseBranchNames: (branches) => {
        return branches.map(branch =>
            branch.name
        )
    }
}

module.exports = githubResponseTranformer 