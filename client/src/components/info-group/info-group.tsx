import { Col, Row } from "react-bootstrap";

type PropTypes = {
  label: string;
  data: string;
};

const InfoGroup = ({ label, data }: PropTypes) => {
  return (
    <Row className="info-group">
      <Col className="info-group__label">{label}</Col>
      <Col className="info-group__info">{data}</Col>
    </Row>
  );
};

export default InfoGroup;
