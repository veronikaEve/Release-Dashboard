export type VersionData = {
  associatedUser: string;
  date: string;
  releaseBranch: string;
  versionFrom: string;
  versionTo: string;
  _id: string;
};

export type ReleaseInfoType = {
  branchName: string;
  currentVersion: string;
  commitHash: string;
  openedBy: string;
  lastUpdatedBy: string;
};
