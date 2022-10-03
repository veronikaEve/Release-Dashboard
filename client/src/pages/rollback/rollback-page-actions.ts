import { concourseJobTypes } from "../../constants/concourse";
import { runJob } from "../../services/concourse";

export const onRollBackClick = (branch: string | undefined) => {
  if (branch) {
    runJob(branch, concourseJobTypes.rollback)
      .then((result: number | void) => {
        if (result === 200) {
          alert(`🥳 successfully rolled back ${branch}`);
        } else {
          alert(`🙁 failed to roll back ${branch}`);
        }
      })
      .catch((err: unknown) => {
        alert(`🙁 something went wrong`);
        console.error(err);
      });
  }
};
