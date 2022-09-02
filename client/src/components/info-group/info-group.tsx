import { Col, Row } from "react-bootstrap";

const InfoGroup = () => {
  return (
    <Row className="info-group">
      <Col className="info-group__label" md={4}>
        Name:
      </Col>
      <Col className="info-group__info" md={8}>
        Wazzaaaap
      </Col>
    </Row>
  );
};

export default InfoGroup;
