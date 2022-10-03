export const runJob = (releaseBranch: string, jobName: string) => {
  return fetch(
    `http://localhost:5000/concourse/run-job/${releaseBranch}/${jobName}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.status)
    .catch((err) => console.error("Something went wrong", err));
};
