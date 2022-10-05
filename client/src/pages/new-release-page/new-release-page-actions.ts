import { Dispatch, SetStateAction } from "react";
import { ActionStatus } from "../../@types";
import { concourseJobTypes } from "../../constants/concourse";
import { runJob } from "../../services/concourse";

export const onReleaseClick = (
  branch: string | undefined,
  setReleaseStatus: Dispatch<SetStateAction<ActionStatus[]>>
) => {
  if (branch) {
    runJob(branch, concourseJobTypes.release)
      .then((result: number | void) => {
        if (result === 200) {
          setReleaseStatus((prevState) => [
            ...prevState,
            {
              statusCode: "success",
              message: `Release pipeline triggered for ${branch}!`,
            },
          ]);
        } else {
          setReleaseStatus((prevState) => [
            ...prevState,
            {
              statusCode: "error",
              message: `Failed to trigger release pipeline for ${branch}!`,
            },
          ]);
        }
      })
      .catch((err: unknown) => {
        setReleaseStatus((prevState) => [
          ...prevState,
          {
            statusCode: "error",
            message: `Something went wrong!`,
          },
        ]);
        console.error(err);
      });
  }
};
