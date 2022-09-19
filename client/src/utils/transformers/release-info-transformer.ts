export const releaseInfoTransformer = (releaseInfo: any) => {
  const branchName: string = releaseInfo.name;
  const currentVersion: string = "1.4";
  const commitHash: string = releaseInfo.commit.sha.substring(0, 6);
  const openedBy: string = releaseInfo.commit.author.login;
  const lastUpdatedBy: string = releaseInfo.commit.author.login;

  return { branchName, currentVersion, commitHash, openedBy, lastUpdatedBy };
};
