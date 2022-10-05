import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { ReleaseInfoType } from "../../@types";
import { getSpecificReleaseData } from "../../services/github";

type PropTypes = {
  label: string;
  inputOptions: any[];
  setReleaseInfo: Dispatch<SetStateAction<ReleaseInfoType>>;
};

const InfoInputGroup = ({ label, inputOptions, setReleaseInfo }: PropTypes) => {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    getSpecificReleaseData(event.target.value)
      .then((result) => {
        setReleaseInfo(result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Row className="info-group">
      <Col className="info-group__label">{label}</Col>
      <Col className="info-group__info">
        <Form.Select as="select" onChange={(e) => onChange(e)}>
          <option>Choose a branch</option>
          {inputOptions &&
            inputOptions
              .map((branch, index) => (
                <option key={index} value={branch?.name}>
                  {branch?.name}
                </option>
              ))
              .reverse()}
        </Form.Select>
      </Col>
    </Row>
  );
};

export default InfoInputGroup;
