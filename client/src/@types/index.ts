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
  appVersion: string;
  latestCommitHash: string;
  openedBy: string;
  lastUpdatedBy: string;
  PRUrl: string;
};

export type ActionStatus = {
  statusCode: "success" | "error";
  message: string;
};
