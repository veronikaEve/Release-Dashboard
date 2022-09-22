export const releaseInfoTransformer = (releaseInfo: any) => {
  const branchName: string = releaseInfo.PRDetails.head.ref;
  const currentVersion: string = "1.4";
  const commitHash: string = releaseInfo.latestCommitDetails.sha.substring(
    0,
    6
  );
  const openedBy: string = releaseInfo.PRDetails.user.login;
  const lastUpdatedBy: string = releaseInfo.latestCommitDetails.author.login;

  return { branchName, currentVersion, commitHash, openedBy, lastUpdatedBy };
};
