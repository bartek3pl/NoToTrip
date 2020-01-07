import React, { FunctionComponent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SocialMedia.scss';
import instagramLogo from '../../assets/images/instagram-logo.png';
import arrow from '../../assets/images/arrow2.png';

const SocialMedia: FunctionComponent = () => {
  const instagramLink = 'https://www.instagram.com/daria.ntt';

  return (
    <section role="article" className="social-media-page">
      <Container className="container-wrapper">
        <Row className="justify-content-center">
          <Col xl={4}>
            <a href={instagramLink} target="_blank" rel="noreferrer noopener">
              <div role="img" className="instagram-logo">
                <i className="icon-instagram" />
                <img
                  src={instagramLogo}
                  className="instagram-logo-img"
                  alt="instagram daria niewójt nototrip"
                />
              </div>
            </a>
          </Col>

          <Col xl={4} className="col-arrow">
            <img
              src={arrow}
              className="icon-arrow"
              alt="nototrip arrow"
              aria-hidden="true"
            />
          </Col>

          <Col xl={4} className="col-text">
            <div className="social-media-text">
              <p>Zajrzyj tutaj!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SocialMedia;
