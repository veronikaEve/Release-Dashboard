import { useState } from "react";
import { Table } from "react-bootstrap";
import { VersionData } from "../../@types";

type PropTypes = {
  versionData: VersionData[];
};

const VersionTable = ({ versionData }: PropTypes) => {
  const [selectedRow, setSelectedRow] = useState<VersionData>();

  const rowClass = (version_id: string) =>
    selectedRow?._id === version_id ? "selected" : "";

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
          <tbody
            className="version-table__body"
            data-testid="version-table__body"
          >
            {versionData &&
              versionData.map((version, index) => (
                <tr
                  key={version._id}
                  onClick={() => setSelectedRow(version)}
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
        </Table>
      </div>
    </div>
  );
};

export default VersionTable;
