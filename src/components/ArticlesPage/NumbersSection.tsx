import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './NumbersSection.scss';

interface IProps {
  location: string;
  distance: string;
  fly: string;
  drive: string;
}

const NumbersSection: FunctionComponent<IProps> = ({
  location,
  distance,
  fly,
  drive,
}) => {
  return (
    <section className="numbers-section-page">
      <Container className="numbers-section-container">
        <Row className="justify-content-center">
          <Col md={3} sm={6} className="numbers-section-column" id="location">
            <div className="box">
              <div className="icon">
                <i className="icon-location" />
              </div>
              <h5>Miejsce</h5>
              <p>{location}</p>
            </div>
          </Col>

          <Col md={3} sm={6} className="numbers-section-column" id="distance">
            <div className="box">
              <div className="icon">
                <i className="icon-ruler" />
              </div>
              <h5>Odległość</h5>
              <p>{distance}</p>
            </div>
          </Col>

          <Col md={3} sm={6} className="numbers-section-column" id="fly">
            <div className="box">
              <div className="icon">
                <i className="icon-flight" />
              </div>
              <h5>Lot</h5>
              <p>{fly}</p>
            </div>
          </Col>

          <Col md={3} sm={6} className="numbers-section-column" id="drive">
            <div className="box">
              <div className="icon">
                <i className="icon-cab" />
              </div>
              <h5>Jazda</h5>
              <p>{drive}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NumbersSection;
