export const getSpecificReleaseData = async (releaseBranch: string) => {
  return fetch(`http://localhost:5000/github/PRs/${releaseBranch}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log("something went wrong", err));
};

export const getReleaseBranches = async () => {
  return fetch(`http://localhost:5000/github/release-branches`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log("something went wrong", err));
};
