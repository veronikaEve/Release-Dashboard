import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { VersionData } from "../../@types";
import { getSpecificReleaseData } from "../../services/github";

type PropTypes = {
  versionData: VersionData[];
  setReleaseInfo: Dispatch<SetStateAction<unknown>>;
};

const VersionTableBody = ({ versionData, setReleaseInfo }: PropTypes) => {
  const [selectedRow, setSelectedRow] = useState<VersionData>(versionData[0]);

  const rowClass = (version_id: string) =>
    selectedRow?._id === version_id ? "selected" : "";

  const onCLick = (version: VersionData) => {
    setSelectedRow(version);
  };

  useEffect(() => {
    getSpecificReleaseData(selectedRow?.releaseBranch)
      .then((result) => {
        setReleaseInfo(result);
      })
      .catch((err) => console.error(err));
  }, [selectedRow, setReleaseInfo]);

  return (
    <tbody className="version-table__body" data-testid="version-table__body">
      {versionData.map((version, index) => (
        <tr
          key={version._id}
          onClick={() => onCLick(version)}
          className={rowClass(version._id)}
          data-testid={`table-row-${index}`}
        >
          <td>{version.date}</td>
          <td>{version.versionFrom}</td>
          <td>{version.versionTo}</td>
          <td>{version.associatedUser}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default VersionTableBody;
