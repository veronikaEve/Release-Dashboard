export const getAllReleaseData = async () => {
  return fetch(`http://localhost:5000/releases`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log("something went wrong", err));
};
