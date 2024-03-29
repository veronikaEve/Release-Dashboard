import { ActionStatus, VersionData } from "../../@types";

export const mockVersionData: VersionData[] = [
  {
    associatedUser: "@johnSmith",
    date: "11/03/2022",
    releaseBranch: "tv_release_1.5",
    versionFrom: "v7.8.2",
    versionTo: "v7.9.6",
    _id: "63122a332e9904df79c834ff",
  },
  {
    associatedUser: "@billy1234",
    date: "09/05/2022",
    releaseBranch: "tv_release_1.4",
    versionFrom: "v7.7.10",
    versionTo: "v7.8.2",
    _id: "6313b230e6c802832ffeee01",
  },
];

export const mockActionStatusData: ActionStatus[] = [
  {
    statusCode: "success",
    message: "Success test message",
  },
  {
    statusCode: "error",
    message: "Error test message",
  },
];
