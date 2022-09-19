import { VersionData } from "../../@types";

export const getSpecificReleaseData = async (releaseVersion: VersionData) => {
  return fetch(
    `http://localhost:5000/github/get-branch-data/${releaseVersion.releaseBranch}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.log("something went wrong", err));
};
