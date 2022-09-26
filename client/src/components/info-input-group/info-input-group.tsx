import { Col, Form, Row } from "react-bootstrap";

type PropTypes = {
  label: string;
  inputOptions: string;
};

const InfoInputGroup = ({ label, inputOptions }: PropTypes) => {
  return (
    <Row className="info-group">
      <Col className="info-group__label">{label}</Col>
      <Col className="info-group__info">
        <Form.Select aria-label="Default select example">
          <option>Choose a branch</option>
          <option value="1">xtv_release_1.1</option>
          <option value="2">xtv_release_1.2</option>
          <option value="3">xtv_release_1.3</option>
        </Form.Select>
      </Col>
    </Row>
  );
};

export default InfoInputGroup;
