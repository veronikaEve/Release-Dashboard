import React, { Dispatch, SetStateAction } from "react";
import { Table } from "react-bootstrap";
import { ReleaseInfoType, VersionData } from "../../@types";
import VersionTableBody from "./version-table-body";

type PropTypes = {
  versionData: VersionData[];
  setReleaseInfo: Dispatch<SetStateAction<ReleaseInfoType>>;
};

const VersionTable = ({ versionData, setReleaseInfo }: PropTypes) => {
  return (
    <div className="table-wrapper">
      <div className="table-wrapper__scroll">
        <Table
          bordered
          hover
          size="sm"
          className="version-table"
          data-testid="version-table"
        >
          <thead className="version-table__header">
            <tr>
              <th>Date</th>
              <th>From</th>
              <th>To</th>
              <th>Excuted by</th>
            </tr>
          </thead>
          {versionData.length && (
            <VersionTableBody
              versionData={versionData}
              setReleaseInfo={setReleaseInfo}
            />
          )}
        </Table>
      </div>
    </div>
  );
};

export default VersionTable;
