import { Dispatch, SetStateAction } from "react";
import { ActionStatus } from "../../@types";
import { concourseJobTypes } from "../../constants/concourse";
import { runJob } from "../../services/concourse";

export const onRollBackClick = (
  branch: string | undefined,
  setRollBackStatus: Dispatch<SetStateAction<ActionStatus[]>>
) => {
  if (branch) {
    runJob(branch, concourseJobTypes.rollback)
      .then((result: number | void) => {
        if (result === 200) {
          setRollBackStatus((prevState) => [
            ...prevState,
            {
              statusCode: "success",
              message: `Roll back pipeline triggered for ${branch}!`,
            },
          ]);
        } else {
          setRollBackStatus((prevState) => [
            ...prevState,
            {
              statusCode: "error",
              message: `Failed to trigger roll back pipeline for ${branch}!`,
            },
          ]);
        }
      })
      .catch((err: unknown) => {
        setRollBackStatus((prevState) => [
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
