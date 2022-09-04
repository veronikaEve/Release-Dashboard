import { Table } from "react-bootstrap";
import { VersionData } from "../../@types";

type PropTypes = {
  versionData: VersionData[];
};

const VersionTable = ({ versionData }: PropTypes) => {
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
          <tbody>
            {versionData &&
              versionData.map((version) => (
                <tr>
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
