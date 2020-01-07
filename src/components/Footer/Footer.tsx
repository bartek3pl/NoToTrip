import React, { FunctionComponent } from 'react';
import { Link } from 'react-scroll';
import { Link as ReachLink } from '@reach/router';
import { Container, Row, Col } from 'react-bootstrap';
import { getCurrentYear } from '../../utils/jsUtils';
import './Footer.scss';

const Footer: FunctionComponent = () => {
  const currentYear = getCurrentYear();

  return (
    <footer className="footer">
      <Container className="container-wrapper" style={{ marginBottom: '2rem' }}>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="footer-block">
              <div className="footer-rights">
                <a href="#home" tabIndex={0}>
                  &copy; {currentYear} NoToTrip All Rights Reserved
                </a>
              </div>

              <div className="footer-menu">
                <ul>
                  <ReachLink to="/" aria-label="Przejdź do strony głównej">
                    <li className="footer-menu-li">Strona główna</li>
                  </ReachLink>
                  <Link
                    to="podroze"
                    spy={true}
                    smooth={true}
                    aria-label="Przejdź do sekcji podróże"
                  >
                    <ReachLink to="/">
                      <li className="footer-menu-li">Podróże</li>
                    </ReachLink>
                  </Link>
                  <Link
                    to="najnowsze-artykuly"
                    spy={true}
                    smooth={true}
                    aria-label="Przejdź do sekcji najnowsze artykuły"
                  >
                    <ReachLink to="/">
                      <li className="footer-menu-li">Najnowsze artykuły</li>
                    </ReachLink>
                  </Link>
                  <Link
                    to="autorzy"
                    spy={true}
                    smooth={true}
                    aria-label="Przejdź do sekcji autorzy"
                  >
                    <ReachLink to="/">
                      <li className="footer-menu-li">Autorzy</li>
                    </ReachLink>
                  </Link>
                  <ReachLink
                    to="terms-and-conditions"
                    className="footer-menu-li"
                    aria-label="Przejdź do strony Terms and Conditions"
                  >
                    <li className="footer-menu-li">
                      <span lang="en">Terms & Conditions</span>
                    </li>
                  </ReachLink>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
